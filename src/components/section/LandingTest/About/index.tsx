import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AboutProps {
  right?: boolean;
}

export default function About({ right }: AboutProps) {
  return (
    <div className={cn("flex gap-12", right ? "flex-row-reverse" : "flex-row")}>
      <Image
        src="https://avatars.githubusercontent.com/u/72400381?v=4"
        alt="내 사진"
        width={480}
        height={640}
        className="w-[480px] h-[640px] object-cover"
      />
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">
            인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말, 인사말,
            인사말, 인사말
          </p>
          <p className="text-lg max-h-[348px] overflow-auto scrollbar-hide">
            안녕하세요 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다.
            저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는
            개발자 입니다. 안녕하세요 저는 개발자 입니다. 저는 개발자 입니다.
            저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는
            개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 안녕하세요 저는 개발자 입니다. 저는
            개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다.
            저는 개발자 입니다. 저는 개발자 입니다. 안녕하세요 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다.
            저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는
            개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 안녕하세요
            저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는
            개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다.
            안녕하세요 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자
            입니다. 저는 개발자 입니다. 저는 개발자 입니다. 저는 개발자 입니다.
            저는 개발자 입니다. 저는 개발자 입니다.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">사용 기술 스택</p>
            <div className="flex flex-row gap-4 flex-wrap">
              <p>기술스택 1</p>
              <p>기술스택 2</p>
              <p>기술스택 3</p>
              <p>기술스택 4</p>
              <p>기술스택 5</p>
              <p>기술스택 6</p>
              <p>기술스택 7</p>
              <p>기술스택 8</p>
              <p>기술스택 9</p>
              <p>기술스택 10</p>
              <p>기술스택 11</p>
              <p>기술스택 12</p>
              <p>기술스택 13</p>
              <p>기술스택 14</p>
              <p>기술스택 15</p>
            </div>
          </div>
          <Button className="max-w-fit">더 알아보기</Button>
        </div>
      </div>
    </div>
  );
}
