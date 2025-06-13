# 프론트엔드 기술 스택

## 핵심 기술

- React 19
  - React Router V7 기반 SSR(서버 사이드 렌더링) 프레임워크
  - TypeScript 기반 개발
- GraphQL
  - graphql-request 기반 GraphQL 데이터 통신
  - GraphQL Code Generator를 통한 타입 안전성 및 코드 제너레이션 활용

## UI/스타일링

- Tailwind CSS
  - 레이아웃 > 크기 > 여백 > 스타일 순서로 클래스 작성
  - 커스텀 유틸리티 클래스 사용
- shadcn/ui
  - 재사용 가능한 UI 컴포넌트 라이브러리 활용
  - Tailwind 기반의 손쉬운 커스터마이징 지원
- Framer Motion
  - 페이지 전환 애니메이션

## 에디터 기능

- CodeMirror 6
  - 마크다운 에디터 구현
  - 커스텀 테마 및 하이라이팅
  - 이미지 업로드 지원
- Unified
  - 마크다운 파싱 및 HTML 변환
  - 수식(KaTeX) 지원
  - 코드 하이라이팅

## 개발 도구

- Jest
  - 단위 테스트
  - 커버리지 리포트
- Playwright
  - E2E 테스트
  - UI 테스트
- Storybook
  - 컴포넌트 문서화
  - Jest 결과 통합
  ```typescript:.storybook/preview.ts
  startLine: 17
  endLine: 23
  ```

## 배포 환경

- Docker
  - React Router 기반 SSR 애플리케이션 컨테이너
  - Storybook 개발 환경 컨테이너
- GitHub Actions
  - 테스트 자동화
  - 개발 환경 배포
  ```yaml:.github/workflows/develop-deploy.yml
  startLine: 1
  endLine: 17
  ```
