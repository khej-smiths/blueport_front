import { ReadResumeQuery } from "@/shared";

interface Props {
  item: NonNullable<
    NonNullable<ReadResumeQuery["readResume"]>["careerList"]
  >[number];
}

export function ResumeCareerItem({ item }: Props) {
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">{item.company}</p>
        <div className="flex items-baseline gap-2">
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm">
              {item.endAt ? "퇴직" : "재직중"}
            </p>
            <div className="flex items-baseline gap-2">
              <div className="flex gap-2">
                <p className="text-muted-foreground">{item.startAt}</p>
                {item.endAt && (
                  <>
                    <p className="text-muted-foreground">-</p>
                    <p className="text-muted-foreground">{item.endAt}</p>
                  </>
                )}
              </div>
              <div className="bg-muted-foreground h-3 w-[1px]" />
              <div className="flex gap-1">
                <p className="text-muted-foreground">{item.department}</p>
                <p className="text-muted-foreground">·</p>
                <p className="text-muted-foreground">{item.position}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm">{item.description}</div>
      </div>
    </li>
  );
}
