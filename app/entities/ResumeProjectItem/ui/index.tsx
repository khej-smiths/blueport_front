import { Hashtag, ReadResumeQuery } from "@/shared";

interface Props {
  item: NonNullable<
    NonNullable<ReadResumeQuery["readResume"]>["projectList"]
  >[number];
}

export function ResumeProjectItem({ item }: Props) {
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">{item.name}</p>
        <div className="flex items-baseline gap-2">
          <div className="flex gap-2">
            <p className="text-muted-foreground">{item.startAt}</p>
            <p className="text-muted-foreground">-</p>
            <p className="text-muted-foreground">{item.endAt}</p>
          </div>
          <div className="bg-muted-foreground h-3 w-[1px]" />
          <p className="text-muted-foreground">{item.personnel}명</p>
        </div>
        <div className="flex gap-2">
          {item.skillList?.map((skill) => (
            <Hashtag key={skill} hashtag={skill} />
          ))}
        </div>
        <div className="text-sm">{item.description}</div>
      </div>
    </li>
  );
}
