import { Control, UseFormWatch } from "react-hook-form";
import { ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

export function PortfolioItem({ index, control, watch, remove }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <p>유형</p>
      <p>파일 또는 링크</p>
    </div>
  );
}
