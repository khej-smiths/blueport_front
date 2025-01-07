/** 블로그 소개 섹션 */
export default function Profile() {
  return (
    <section className="text-center">
      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-2">안녕하세요!</h2>
      <p className="text-gray-600 mb-4">
        프론트엔드 개발자의 기술 블로그입니다.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-gray-600 hover:text-black hover:underline">
          GitHub
        </a>
        <a href="#" className="text-gray-600 hover:text-black hover:underline">
          Resume
        </a>
      </div>
    </section>
  );
}
