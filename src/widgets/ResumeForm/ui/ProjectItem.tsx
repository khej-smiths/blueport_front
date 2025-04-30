import { Control, UseFormWatch } from "react-hook-form";
import { ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

export function ProjectItem({ index, control, watch, remove }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <p>프로젝트명</p>
      <p>기간</p>
      <p>인원</p>
      <p>소개</p>
      <p>기술스택</p>
    </div>
  );
}
