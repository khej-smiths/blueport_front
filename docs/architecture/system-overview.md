# 시스템 개요

## 프로젝트 구조 (FSD 아키텍처)

```
app/                      # Next.js 14 App Router 및 라우팅
src/
├── pages/              # 실제 라우팅 및 페이지 엔트리포인트, API 라우트, 폴더별 UI/비즈니스 로직 분리 등 실질적인 페이지 구현에 사용. 각 주요 라우트(블로그, 에디터, 로그인, 랜딩, 관리 등)를 폴더 단위로 세분화하여 관리하며, app/와 병행하여 SSR/CSR 라우팅 및 페이지 구성을 담당
├── entities/           # 도메인 엔티티별 UI 컴포넌트와 타입을 관리합니다. 예시: 게시글 카드(HorizontalPostCard, VerticalPostCard), 라벨 입력(LabelInput), LNB 메뉴 아이템 등. 각 엔티티는 자체적으로 UI, 테스트, 스토리, 타입 등을 포함하며, 도메인 데이터의 시각화와 조작에 집중합니다.
├── features/           # 사용자 기능 단위(액션/프로세스)별로 UI, 로직, API 연동 등을 관리합니다. 예시: 회원가입 다이얼로그(SignupDialog), 에디터(Editor), 파일 업로드(FileUpload), 플로팅 버튼, 미리보기 등. 각 기능은 독립적으로 동작하며, 여러 엔티티와 shared 리소스를 조합해 사용자 중심의 기능을 제공합니다.
├── widgets/            # 여러 feature와 entity를 조합하여 페이지 내 주요 UI 섹션을 구성합니다. 예시: 프로필(Profile), 인기글 리스트(PopularPostList), 최근글 리스트(RecentPostList), GNB/LNB, 푸터, AboutForm, ResumeForm 등. 페이지의 큰 블록 단위 UI를 담당하며, 재사용 가능한 복합 UI를 제공합니다.
├── shared/             # 프로젝트 전역에서 재사용되는 공통 컴포넌트, 유틸리티 함수, 타입, 상수, 커스텀 훅, 정적 리소스(assets) 등을 관리합니다. 예시: Button, Input, Dialog, Calendar 등 UI 컴포넌트, useDebounce 등 커스텀 훅, ROUTE/regex 등 상수, getErrorMessage 등 유틸, 타입 정의, 이미지/폰트 등. 모든 레이어에서 참조 가능하며, 중복을 줄이고 일관성을 높입니다.
```

### 디렉터리 설명
- **app/**: Next.js 14의 App Router 기반 폴더로, 프로젝트 루트(최상위)에 위치. 글로벌 레이아웃(layout.tsx), 페이지 전환 애니메이션(template.tsx), 글로벌 스타일(globals.css, prismTheme.css), 전역 Provider(_provider/), 루트 페이지(page.tsx), favicon 등 앱 전체에 적용되는 설정과 레이아웃을 담당. 라우트 그룹((auth), (blog), (manage) 등) 및 동적 라우트([username], [post] 등)를 통해 인증, 블로그, 관리, 에디터 등 주요 도메인별 페이지 진입점과 레이아웃을 구성하며, SSR/CSR 라우팅의 중심 역할을 수행
- **pages/**: 실제 라우팅 및 페이지 엔트리포인트, API 라우트, 폴더별 UI/비즈니스 로직 분리 등 실질적인 페이지 구현에 사용. 각 주요 라우트(블로그, 에디터, 로그인, 랜딩, 관리 등)를 폴더 단위로 세분화하여 관리하며, app/와 병행하여 SSR/CSR 라우팅 및 페이지 구성을 담당
- **entities/**: 도메인 엔티티별 UI 컴포넌트와 타입을 관리합니다. 예시: 게시글 카드(HorizontalPostCard, VerticalPostCard), 라벨 입력(LabelInput), LNB 메뉴 아이템 등. 각 엔티티는 자체적으로 UI, 테스트, 스토리, 타입 등을 포함하며, 도메인 데이터의 시각화와 조작에 집중합니다.
- **features/**: 사용자 기능 단위(액션/프로세스)별로 UI, 로직, API 연동 등을 관리합니다. 예시: 회원가입 다이얼로그(SignupDialog), 에디터(Editor), 파일 업로드(FileUpload), 플로팅 버튼, 미리보기 등. 각 기능은 독립적으로 동작하며, 여러 엔티티와 shared 리소스를 조합해 사용자 중심의 기능을 제공합니다.
- **widgets/**: 여러 feature와 entity를 조합하여 페이지 내 주요 UI 섹션을 구성합니다. 예시: 프로필(Profile), 인기글 리스트(PopularPostList), 최근글 리스트(RecentPostList), GNB/LNB, 푸터, AboutForm, ResumeForm 등. 페이지의 큰 블록 단위 UI를 담당하며, 재사용 가능한 복합 UI를 제공합니다.
- **shared/**: 프로젝트 전역에서 재사용되는 공통 컴포넌트, 유틸리티 함수, 타입, 상수, 커스텀 훅, 정적 리소스(assets) 등을 관리합니다. 예시: Button, Input, Dialog, Calendar 등 UI 컴포넌트, useDebounce 등 커스텀 훅, ROUTE/regex 등 상수, getErrorMessage 등 유틸, 타입 정의, 이미지/폰트 등. 모든 레이어에서 참조 가능하며, 중복을 줄이고 일관성을 높입니다.

#### Slice 구조 예시

FSD 아키텍처에서 각 Segment(예: widgets) 내부는 slice(기능/도메인별 폴더)로 나뉘며, slice 내부는 역할별로 세분화됩니다. 아래는 ResumeForm 위젯의 구조 예시입니다.

```
src/widgets/ResumeForm/
├── ui/
│   └── ResumeForm.tsx      # 이력서 폼 UI 컴포넌트
├── model/
│   ├── schema.ts           # 이력서 폼의 유효성 검사, 폼 데이터 구조 등
│   └── type.ts             # 이력서 관련 타입 정의
├── api/
│   └── mutation.ts         # 이력서 저장/수정 등 API 연동 함수
├── assets/
│   └── resume-icon.svg     # 이력서 폼에서 사용하는 아이콘/이미지 등
├── lib/
│   └── parseResume.ts      # 이력서 데이터 파싱 등 ResumeForm 전용 유틸 함수
└── index.ts                # ResumeForm 위젯의 엔트리포인트(외부 export)
```

- **ui/**: Slice의 UI 컴포넌트
- **model/**: 상태, 타입, 폼 유효성 등 비즈니스 로직
- **api/**: 관련 API 연동
- **assets/**: Slice 전용 이미지/아이콘 등 정적 리소스
- **lib/**: Slice 전용 유틸리티 함수
- **index.ts**: 외부 export용 엔트리포인트

이처럼 각 slice(ResumeForm 등) 내부를 역할별로 세분화하면, FSD 아키텍처의 응집도와 유지보수성을 극대화할 수 있습니다.

## 주요 기능

### 1. 마크다운 에디터
- CodeMirror 6 기반 에디터
- 실시간 마크다운 프리뷰
- 수식(KaTeX), 코드 하이라이팅 지원

### 2. 블로그 시스템
- 사용자별 블로그 페이지
- 게시물 CRUD
- 반응형 디자인

## 아키텍처 특징 (FSD 기반)

### 1. Feature-Sliced Design 구조
- 기능(Feature) 중심의 폴더 구조로 유지보수성과 확장성 강화
- 도메인(entities), 기능(features), UI 섹션(widgets), 공통(shared) 등으로 명확히 분리
- 각 폴더 내에서 관련 상태, API, 컴포넌트, 스타일, 타입 등을 독립적으로 관리

### 2. 컴포넌트 설계
- Atomic Design의 장점을 일부 차용하되, FSD의 역할별 분리 원칙을 우선 적용
- 재사용성 높은 컴포넌트는 shared에, 도메인/기능별 컴포넌트는 entities/features/widgets에 위치

### 3. 테스트 전략
- Jest: 단위 테스트
- Playwright: E2E 테스트
- Storybook: 컴포넌트 문서화 및 테스트
- 각 레이어별(entities, features, widgets, shared)로 테스트 코드 분리

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
- FSD 구조에 따라 불필요한 의존성 최소화
- 동적 임포트 및 코드 스플리팅 적용

## 보안

### 1. 인증
- 로그인/회원가입 구현 (features/auth 등)
- 미들웨어를 통한 라우트 보호 (app/ 및 features 활용)

### 2. API 보안
- API 라우트 보호
- 환경 변수를 통한 설정 관리
