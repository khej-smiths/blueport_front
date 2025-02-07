"use client";

import { Dispatch, SetStateAction } from "react";
import { EducationDto } from "../page";
import { Button } from "@/components/common/Button";
import { useDialogStore } from "@/store/dialog";

interface EducationItemProps {
  key: React.Key;
  item: EducationDto;
  setEducationList: Dispatch<SetStateAction<EducationDto[]>>;
}

export default function EducationItem({ item }: EducationItemProps) {
  const { setDialog } = useDialogStore();

  const handleOpenSearchSchool = () => {
    setDialog(true, {
      onConfirm: () => console.log("confirm"),
      onClose: () => setDialog(false, undefined),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleOpenSearchSchool}>학교 찾아보기</Button>
      <p>기간</p>
      <p>졸업여부</p>
    </div>
  );
}
