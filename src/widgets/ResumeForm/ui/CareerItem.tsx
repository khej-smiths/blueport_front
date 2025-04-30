import { Control, UseFormWatch } from "react-hook-form";
import { ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

export function CareerItem({ index, control, watch, remove }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <p>회사명</p>
      <p>기간</p>
      <p>직책</p>
      <p>재직여부</p>
      <p>소개</p>
    </div>
  );
}
