import { Hashtag } from "@/shared";

export function ResumeProjectItem() {
  const skillList = ["React", "Next.js", "TypeScript", "Tailwind CSS"];
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">프로젝트명</p>
        <div className="flex items-baseline gap-2">
          <div className="flex gap-2">
            <p className="text-muted-foreground">시작일</p>
            <p className="text-muted-foreground">-</p>
            <p className="text-muted-foreground">마감일</p>
          </div>
          <div className="bg-muted-foreground h-3 w-[1px]" />
          <p className="text-muted-foreground">프로젝트 인원</p>
        </div>
        <div className="flex gap-2">
          {skillList.map((skill) => (
            <Hashtag key={skill} hashtag={skill} />
          ))}
        </div>
        <div className="text-sm">담당업무</div>
      </div>
    </li>
  );
}
