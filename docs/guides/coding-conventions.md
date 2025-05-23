# 코딩 컨벤션

## TypeScript

- 인터페이스 사용을 우선한다

  - Props 정의 시 인터페이스 사용

  ```typescript:src/components/section/Preview/index.tsx
  startLine: 4
  endLine: 6
  ```

- 함수 반환 타입 명시
  - Hook의 경우 제네릭 타입 활용
  ```typescript:src/hooks/useCodemirror.tsx
  startLine: 49
  endLine: 52
  ```

## React/Next.js

- 컴포넌트 구조화 방식

  - 섹션별 폴더 구조 사용 (section/Landing, section/Editor 등)
  - 컴포넌트별 stories, test 파일 포함

- Props 인터페이스 정의

  - Props 접미사 사용

  ```typescript:src/components/section/Editor/index.tsx
  startLine: 8
  endLine: 11
  ```

- Server/Client 컴포넌트 구분
  - 클라이언트 컴포넌트는 파일 최상단에 "use client" 지시어 사용
  ```typescript:src/components/section/Editor/index.tsx
  startLine: 1
  endLine: 2
  ```

## 스타일링

- Tailwind CSS 클래스 순서

  - 레이아웃(flex, grid) > 크기(width, height) > 여백(margin, padding) > 스타일(color, background)

  ```typescript:src/components/section/GNB/index.tsx
  startLine: 3
  endLine: 3
  ```

- 커스텀 유틸리티 클래스

  - globals.css에서 @layer base를 통해 정의

  ```css:src/app/globals.css
  startLine: 4
  endLine: 33
  ```

- 반응형 디자인 적용
  - Tailwind 브레이크포인트 활용 (max-w-7xl 등)
  ```typescript:src/app/page.tsx
  startLine: 6
  endLine: 6
  ```

## ESLint

- 프로젝트 전역에 ESLint를 적용하여 코드 스타일과 품질을 자동으로 검사합니다.
- 주요 규칙: TypeScript, React, Next.js, import 정렬(simple-import-sort), Prettier 연동 등
- 커스텀 룰 및 플러그인: @typescript-eslint, eslint-plugin-simple-import-sort, eslint-config-next 등
- 코드 저장 시 자동 포맷팅 및 린트 에러 방지
- .eslintrc, .eslintignore 파일로 세부 설정 관리
