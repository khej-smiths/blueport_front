# 배포 가이드: AWS Lightsail + Docker + Nginx + Certbot + Github Actions

이 문서는 React SSR(서버 사이드 렌더링) 프로젝트를 AWS Lightsail에 Docker로 배포하고, Nginx와 Certbot을 이용해 HTTPS(SSL) 환경을 구축하는 전체 과정을 정리한 문서입니다.

---

## 1. 전체 배포 구조

- **Github Actions**: 코드 변경 시 Docker 이미지 빌드 및 Docker Hub에 푸시, Lightsail 서버에 자동 배포
- **AWS Lightsail**: Docker 컨테이너로 SSR 서버 운영, Nginx로 리버스 프록시 및 SSL 처리
- **Nginx**: 80/443 포트에서 트래픽 수신, 443(HTTPS)로 암호화, 내부 SSR 서버로 프록시
- **Certbot**: Let's Encrypt 무료 SSL 인증서 발급 및 자동 갱신
- **Route 53**: 도메인 DNS 관리 (A 레코드로 Lightsail 퍼블릭 IP 연결)

---

## 2. Github Actions 워크플로우

- 코드 변경/태그 푸시 시 Docker 이미지 빌드 및 Docker Hub에 업로드
- Lightsail 인스턴스에 SSH로 접속해 최신 이미지를 pull, 컨테이너 재실행
- 워크플로우에서는 오직 SSR 서버(Docker) 배포만 자동화, Nginx/SSL은 서버에서 직접 1회 수동 세팅

### 실전 배포 경험 및 트러블슈팅

#### React Router v7 SSR 구조의 배포 전략

- React Router v7 기반 SSR 프로젝트는 빌드 시 `/build/server/index.js`(SSR 서버 엔트리)와 `/build/client`(정적 파일)가 생성됩니다.
- SSR 서버는 `node build/server/index.js`로 실행하며, 정적 파일(`/build/client/assets` 등)은 Nginx에서 직접 서비스합니다.
- Nginx는 `/assets` 등 정적 경로는 직접 서비스하고, 그 외 모든 요청은 SSR 서버(예: 3000번 포트)로 프록시합니다.
- Dockerfile의 CMD는 반드시 SSR 서버 엔트리(`build/server/index.js`)를 실행해야 하며, `package.json`의 start 스크립트가 이를 가리키는지 확인해야 합니다.

#### Dockerfile 및 Nginx 설정 실전 팁

- Dockerfile에서 빌드 결과물 중 SSR 서버 코드(`build/server`)와 정적 파일(`build/client`)을 분리해 복사합니다.
- Nginx 설정 예시:

  ```nginx
  server {
      listen 80;
      server_name yourdomain.com;

      location /assets/ {
          alias /app/build/client/assets/;
          access_log off;
          expires 30d;
      }

      location / {
          proxy_pass http://localhost:3000; # SSR 서버 포트
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
      }
  }
  ```

- SSR 서버가 3000번 포트에서 동작 중이어야 하며, Nginx는 정적 파일 외 모든 요청을 해당 포트로 프록시합니다.

#### HTTPS(SSL) 적용 및 주의사항

- HTTPS(443 포트)로 서비스하려면 Nginx에서 SSL 인증서를 적용해야 하며, Certbot 등으로 인증서를 발급받아야 합니다.
- Lightsail 인스턴스에서 직접 SSL 인증서를 발급/적용해야 하며, Docker 컨테이너 내부에서 직접 SSL을 적용하는 것보다 Nginx에서 처리하는 것이 일반적입니다.
- Nginx에서 80 포트는 HTTP→HTTPS 리디렉션, 443 포트는 SSL 적용 및 프록시로 구성합니다.
- 인증서 발급 전에는 443 포트 블록을 작성하지 말고, DNS 전파 및 도메인 연결이 완료된 후 certbot을 실행해야 합니다.

#### Github Actions와 서버 환경의 역할 분리

- Github Actions는 Docker 이미지 빌드/푸시 및 SSR 서버 컨테이너 배포만 자동화합니다.
- Nginx, SSL 인증서, 방화벽, DNS 등 인프라 세팅은 서버에서 1회 수동으로 진행합니다.
- 컨테이너 배포 시 기존 컨테이너가 있으면 중지/삭제 후 새 컨테이너를 실행해야 하며, `docker ps -a -q -f name=<컨테이너명>`으로 모든 상태의 컨테이너를 확인해야 합니다.
- Docker 명령어는 sudo 권한이 필요할 수 있으므로, Github Actions 배포 스크립트에서 sudo를 붙여 실행하는 것이 안전합니다.

#### 트러블슈팅 경험

- Docker가 설치되어 있지 않으면 배포 스크립트에서 자동 설치하도록 조건문을 추가해야 함
- docker 그룹 권한이 즉시 반영되지 않으므로, sudo로 docker 명령어를 실행해야 함
- 컨테이너가 이미 존재할 경우 중지/삭제 후 재실행하지 않으면 이름 충돌 에러가 발생함
- SSR 서버가 정상적으로 실행 중인지, Nginx가 올바르게 프록시하고 있는지 curl, docker logs, nginx error.log 등으로 점검 필요
- 80/443 포트가 방화벽에서 열려 있지 않으면 외부 접속이 불가함
- HTTPS(443)로 접속 시 ERR_CONNECTION_REFUSED가 발생하면 Nginx 설정, 인증서 적용, 방화벽, SSR 서버 상태를 모두 점검해야 함
- Vite 개발 서버의 https 옵션은 개발용이며, 운영 환경에서는 Nginx에서 SSL을 적용해야 함

## 3. Lightsail 인스턴스 준비

1. **Docker 설치 및 SSR 컨테이너 실행**
   ```bash
   docker pull <your-dockerhub-username>/<your-image-name>:<tag>
   docker run -d --name blueport_front -p 3000:3000 <your-dockerhub-username>/<your-image-name>:<tag>
   ```
2. **Nginx 설치**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

---

## 4. Nginx 리버스 프록시 및 SSL 설정

### 4-1. Nginx 설정 파일 작성

`/etc/nginx/sites-available/blueport_front` 파일 생성:

```nginx
# 80 Port: HTTP -> HTTPS redirect
server {
    server_name blue-port.co.kr www.blue-port.co.kr;
    return 301 https://$host$request_uri;
}

# 443 Port: HTTPS
server {
    listen 443 ssl;
    server_name blue-port.co.kr www.blue-port.co.kr;

    ssl_certificate /etc/letsencrypt/live/blue-port.co.kr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/blue-port.co.kr/privkey.pem;

    location / {
        proxy_pass http://localhost:3000; # Docker SSR Server Port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

심볼릭 링크 연결 및 기본 설정 비활성화:

```bash
sudo ln -s /etc/nginx/sites-available/blueport_front /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

문법 체크 및 재시작:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### 4-2. Certbot으로 SSL 인증서 발급

1. Certbot 및 nginx 플러그인 설치
   ```bash
   sudo apt install python3-certbot-nginx
   ```
2. 인증서 발급
   ```bash
   sudo certbot --nginx -d blue-port.co.kr -d www.blue-port.co.kr
   ```
   - 이메일 입력(필수)
   - 안내에 따라 리다이렉트(HTTP→HTTPS) 선택
3. 인증서 자동 갱신 크론 등록
   ```bash
   sudo crontab -e
   # 아래 내용 추가
   0 2 * * * /usr/bin/certbot renew --quiet
   ```

---

## 5. DNS 및 방화벽 설정

- Route 53 등에서 blue-port.co.kr, www.blue-port.co.kr 모두 A 레코드로 Lightsail 퍼블릭 IP 연결
- Lightsail 네트워크 방화벽에서 80, 443 포트 개방
- (필요시) UFW 등 내부 방화벽도 80, 443 허용

---

## 6. 문제 해결 경험 및 체크리스트

- **proxy_pass는 반드시 http로!** SSR 서버가 https를 직접 제공하지 않으므로, Nginx에서 http로 프록시해야 함
- **server_name에는 도메인만!** URL, 경로, 인증서 경로 등은 절대 넣지 말 것
- **인증서 없는 상태에서 443 포트 블록 작성 금지**: 인증서 발급 전에는 80 포트만 남기고 진행
- **DNS 전파 대기**: 인증서 발급 전 www 서브도메인까지 A 레코드 등록, 전파 완료 후 certbot 실행
- **컨테이너, Nginx, 방화벽, DNS 모두 점검**: 각 단계별로 curl, nslookup, docker logs, nginx error.log 등으로 점검

---

## 7. 참고 명령어

- Docker 컨테이너 상태 확인: `sudo docker ps`
- SSR 서버 동작 확인: `curl http://localhost:3000`
- Nginx 상태 확인: `sudo systemctl status nginx`
- Nginx 에러 로그: `sudo tail -n 50 /var/log/nginx/error.log`
- DNS 확인: `nslookup www.blue-port.co.kr`

---

## 8. 결론 및 권장 운영 방식

- SSR 서버는 Docker 컨테이너로, Nginx는 호스트에서 직접 운영
- Nginx에서 SSL 처리 후 내부로 http 프록시
- 인증서, 방화벽, DNS 등 인프라 세팅은 서버에서 1회 수동 진행, 앱 배포만 Github Actions로 자동화
