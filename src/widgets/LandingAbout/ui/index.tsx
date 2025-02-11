import { Button, cn } from "@/shared";
import Image from "next/image";

interface Props {
  right?: boolean;
}

export function LandingAbout({ right }: Props) {
  return (
    <div
      role="article"
      aria-label="about-section"
      className={cn(
        "overflow-hidden rounded-lg border transition hover:shadow-lg",
        "flex flex-row gap-0",
        right && "flex-row-reverse"
      )}
    >
      <div className="relative h-64 w-full flex-shrink-0 md:h-auto md:w-[480px]">
        <Image
          src="https://avatars.githubusercontent.com/u/72400381?v=4"
          alt="내 사진"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between gap-8 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <h2 className="line-clamp-3 text-2xl font-bold">
            인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말,
            인사말, 인사말
          </h2>
          <p className="max-h-[348px] overflow-auto text-lg text-gray-600 scrollbar-hide">
            안녕하세요 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다...
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">사용 기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <Button variant="outline" className="max-w-fit">
            더 알아보기
          </Button>
        </div>
      </div>
    </div>
  );
}
