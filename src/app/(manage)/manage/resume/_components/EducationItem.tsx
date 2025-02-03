import { Dispatch, SetStateAction } from "react";
import { EducationDto } from "../page";
import { Dialog, DialogTrigger } from "@/components/common/Dialog/DialogStyle";
import { Button } from "@/components/common/Button";

interface EducationItemProps {
  key: React.Key;
  item: EducationDto;
  setEducationList: Dispatch<SetStateAction<EducationDto[]>>;
}

export default function EducationItem({ item }: EducationItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <Dialog>
        <DialogTrigger>
          <Button>학교 찾아보기</Button>
        </DialogTrigger>
      </Dialog>
      <p>기간</p>
      <p>졸업여부</p>
    </div>
  );
}
