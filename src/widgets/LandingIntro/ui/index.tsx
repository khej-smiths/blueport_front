import Image from "next/image";

export function LandingIntro() {
  return (
    <div
      role="article"
      aria-label="intro-section"
      className="whitespace-pre-line"
    >
      <div className="max-w-2xl">
        <Image
          src="/assets/text_logo.png"
          alt="logo"
          width={879}
          height={200}
        />
      </div>
      <p className="text-5xl font-thin leading-relaxed text-primary">
        생각을 정박시키는 개발 블로그
      </p>
    </div>
  );
}
