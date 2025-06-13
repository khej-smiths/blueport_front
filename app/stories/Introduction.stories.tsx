import type { Meta } from "@storybook/react";

const meta = {
  title: "Introduction",
} satisfies Meta<void>;

export default meta;

export const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <div className="space-y-8">
        {/* 헤더 섹션 */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to P.log Component Library
          </h1>
          <p className="text-lg text-gray-600">
            이 스토리북은 P.log 프로젝트의 UI 컴포넌트 라이브러리입니다.
          </p>
        </div>

        {/* 사용 방법 섹션 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">사용 방법</h2>
          <p className="text-gray-600 leading-relaxed">
            각 컴포넌트는 독립적으로 개발되었으며, 재사용이 가능합니다.
            컴포넌트의 다양한 상태와 변형을 확인할 수 있습니다.
          </p>
        </div>

        {/* 구조 섹션 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">구조</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm">C</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Components</span>
                <p className="text-gray-600">기본 UI 컴포넌트</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">L</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Layouts</span>
                <p className="text-gray-600">레이아웃 관련 컴포넌트</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">F</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Features</span>
                <p className="text-gray-600">특정 기능을 위한 복합 컴포넌트</p>
              </div>
            </li>
          </ul>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            왼쪽 사이드바에서 각 컴포넌트의 문서를 확인할 수 있습니다. 각
            컴포넌트는 예제와 함께 제공되며, 실시간으로 프로퍼티를 변경해볼 수
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
