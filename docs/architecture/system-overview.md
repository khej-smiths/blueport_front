# 시스템 개요

## 프로젝트 구조

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # 인증 관련 라우트 그룹
│   ├── (blog)/            # 블로그 관련 라우트 그룹
│   ├── editor/            # 에디터 페이지
│   └── layout.tsx         # 루트 레이아웃
├── components/
│   ├── common/            # 공통 컴포넌트
│   ├── section/           # 섹션별 컴포넌트
│   └── ui/               # UI 기본 컴포넌트
├── hooks/                 # 커스텀 훅
├── style/                # 전역 스타일
└── utils/                # 유틸리티 함수
```

## 주요 기능

### 1. 마크다운 에디터

- CodeMirror 6 기반 에디터
- 실시간 마크다운 프리뷰
- 수식(KaTeX), 코드 하이라이팅 지원

### 2. 블로그 시스템

- 사용자별 블로그 페이지
- 게시물 CRUD
- 반응형 디자인

## 아키텍처 특징

### 1. App Router 기반 구조

- 라우트 그룹을 통한 논리적 분리
  - (auth): 인증 관련 페이지
  - (blog): 블로그 관련 페이지
- Server Component 우선 사용

### 2. 컴포넌트 설계

- Atomic Design 변형 구조 적용
  - common: 재사용 가능한 기본 컴포넌트
  - section: 페이지별 섹션 컴포넌트

### 3. 테스트 전략

- Jest: 단위 테스트
- Playwright: E2E 테스트
- Storybook: 컴포넌트 문서화 및 테스트

## 개발 환경

### 1. Docker 구성

- Next.js 애플리케이션 컨테이너
- Storybook 개발 환경 컨테이너
- 개발 환경 일관성 보장

### 2. CI/CD

- GitHub Actions 기반 자동화
  - 테스트 자동화
  - 개발 환경 배포

## 성능 최적화

### 1. 이미지 최적화

- Next.js Image 컴포넌트 사용
- 이미지 업로드 시 최적화 처리

### 2. 컴포넌트 최적화

- Server/Client 컴포넌트 적절한 분리
- 동적 임포트를 통한 코드 스플리팅

## 보안

### 1. 인증

- 로그인/회원가입 구현
- 미들웨어를 통한 라우트 보호

### 2. API 보안

- API 라우트 보호
- 환경 변수를 통한 설정 관리
