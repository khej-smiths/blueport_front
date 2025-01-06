import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AboutProps {
  right?: boolean;
}

export default function About({ right }: AboutProps) {
  return (
    <div
      role="article"
      aria-label="about-section"
      className={cn(
        "border rounded-lg overflow-hidden hover:shadow-lg transition",
        "flex flex-row gap-0",
        right && "flex-row-reverse"
      )}
    >
      <div className="w-full md:w-[480px] h-64 md:h-auto relative flex-shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/72400381?v=4"
          alt="내 사진"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-6 md:p-8 gap-8 flex-grow">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold line-clamp-3">
            인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말,
            인사말, 인사말
          </h2>
          <p className="text-gray-600 text-lg max-h-[348px] overflow-auto scrollbar-hide">
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
                    className="text-sm bg-gray-100 px-3 py-1.5 rounded-full"
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
