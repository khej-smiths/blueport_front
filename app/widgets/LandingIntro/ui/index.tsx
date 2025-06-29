export function LandingIntro() {
  return (
    <div
      role="article"
      aria-label="intro-section"
      className="whitespace-pre-line"
    >
      <div className="max-w-2xl max-md:max-w-64">
        <img src="/assets/text_logo.png" alt="logo" width={879} height={200} />
      </div>
      <p className="text-primary text-5xl leading-relaxed font-thin not-xl:text-4xl max-md:text-2xl">
        생각을 정박시키는 개발 블로그
      </p>
    </div>
  );
}
