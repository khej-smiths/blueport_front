# AGENTS.md

## 개요

이 문서는 OpenAI Codex 및 기타 AI 에이전트가 본 프로젝트(마크다운 블로그 에디터)의 코드베이스를 이해하고, 자동화된 코드 생성 및 유지보수 작업을 수행할 때 참고할 핵심 가이드라인을 제공합니다.

---

## 1. 시스템 아키텍처 및 폴더 구조

- **FSD(Feature-Sliced Design) 아키텍처**를 기반으로, 유지보수성과 확장성을 극대화합니다.
- 주요 폴더 구조:
  - `app/`: React Router V7 기반 SSR 루트, 글로벌 레이아웃과 라우팅 관리
  - `app/pages/`: 페이지 엔트리포인트와 라우트 정의
  - `app/entities/`: 도메인 엔티티별 UI 컴포넌트 및 타입
  - `app/features/`: 사용자 기능 단위별 UI, 로직, API 연동
  - `app/widgets/`: 여러 feature/entity를 조합한 복합 UI 섹션
  - `app/shared/`: 전역 공통 컴포넌트, 유틸, 타입, 상수, 커스텀 훅 등

### Slice 구조 예시

각 Segment(예: widgets) 내부는 slice(기능/도메인별 폴더)로 나뉘며, slice 내부는 역할별로 세분화됩니다.

```
app/widgets/ResumeForm/
├── ui/
├── model/
├── api/
├── assets/
├── lib/
└── index.ts
```

---

## 2. 기술 스택

- **프레임워크**: React Router V7 기반 SSR(React 19, TypeScript)
- **데이터 통신**: GraphQL (graphql-request, Code Generator)
- **UI/스타일링**: Tailwind CSS, shadcn/ui, Framer Motion
- **에디터**: CodeMirror 6, Unified(마크다운 파싱, 수식/코드 하이라이팅)
- **테스트/문서화**: Jest, Playwright, Storybook
- **배포/CI**: Docker, GitHub Actions
- **패키지 매니저**: pnpm (종속성 설치 명령어: `pnpm i`)
- **Node.js 버전**: 22.16.0

---

## 3. 코딩 컨벤션

- **TypeScript**
  - Props, 데이터 구조 등은 인터페이스 우선 사용
  - 함수 반환 타입 명시, Hook은 제네릭 타입 활용
- **React/React Router**
  - 섹션별 폴더 구조, 컴포넌트별 stories/test 파일 포함
  - Props 인터페이스는 `Props` 접미사 사용
  - 클라이언트 컴포넌트는 "use client" 지시어 명시
- **스타일링**
  - Tailwind CSS 클래스 순서: 레이아웃 > 크기 > 여백 > 스타일
  - 커스텀 유틸리티 클래스는 globals.css의 @layer base에 정의
  - 반응형 디자인은 Tailwind 브레이크포인트 활용
- **ESLint**
  - 프로젝트 전역 적용, TypeScript/React/Prettier 연동
  - 커스텀 룰 및 플러그인 사용, 코드 저장 시 자동 포맷팅

---

## 4. 주요 기능 및 보안

- **마크다운 에디터**: 실시간 프리뷰, 수식(KaTeX), 코드 하이라이팅, 이미지 업로드
- **블로그 시스템**: 사용자별 블로그, 게시물 CRUD, 이력서 CRUD, 반응형 디자인
- **인증/보안**: 로그인/회원가입, 미들웨어 기반 라우트 보호, API 보안, 환경 변수 관리

---

## 5. AI 에이전트 작업 가이드

- 반드시 FSD 아키텍처와 코딩 컨벤션을 준수할 것
- 새로운 slice/feature/widget/shared 생성 시 역할별 폴더 구조를 명확히 구분
- 타입 안전성(TypeScript)과 코드 일관성(ESLint, Prettier)을 항상 유지
- 테스트 코드(Jest, Playwright) 및 문서(Storybook)도 함께 작성 권장
- 기술 스택 및 시스템 구조 변경 시 AGENTS.md도 반드시 갱신
- **패키지 설치 및 실행 환경**: 반드시 Node.js 22.16.0 버전과 pnpm을 사용하며, 종속성 설치는 `pnpm i` 명령어로 수행할 것

---

## 6. 커밋 및 PR 메시지 작성 규칙

- 모든 Pull Request(PR) 제목, 본문, 커밋 메시지는 반드시 **한국어**로 작성해야 합니다.
- 코드 변경 내역, 목적, 영향 등을 명확하고 간결하게 기술합니다.
- 영어, 혼용, 이모지 사용은 지양하며, 일관된 한국어 표현을 사용합니다.
- Codex로 생성하는 브랜치 이름은 반드시 영문으로 작성합니다.

---
