import { ReadResumeQuery } from "@/shared";
import { GraduationStatusMapper } from "@/shared/constant/common";

interface Props {
  item: NonNullable<
    NonNullable<ReadResumeQuery["readResume"]>["educationList"]
  >[number];
}

export function ResumeEducationItem({ item }: Props) {
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">{item.name}</p>
        <div className="flex items-baseline gap-2">
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm">
              {GraduationStatusMapper[item.graduationStatus!]}
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
              <p>{item.major}</p>
            </div>
          </div>
        </div>
        {item.standardGrade !== "none" && item.standardGrade && (
          <div className="flex items-baseline gap-2">
            <p className="text-muted-foreground">학점</p>
            <div className="bg-muted-foreground h-3 w-[1px]" />
            <p>
              {item.grade} / {item.standardGrade ?? "N/A"}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
