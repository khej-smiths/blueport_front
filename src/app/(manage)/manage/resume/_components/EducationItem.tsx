"use client";

import { Dispatch, SetStateAction } from "react";
import { EducationDto } from "../page";
import { Button } from "@/components/common/Button";
import useDialog from "@/hooks/useDialog";
import SearchSchoolDialog from "@/components/common/Dialog/SearchSchoolDialog";

interface EducationItemProps {
  key: React.Key;
  item: EducationDto;
  setEducationList: Dispatch<SetStateAction<EducationDto[]>>;
}

export default function EducationItem({ item }: EducationItemProps) {
  const { openDialog } = useDialog();

  const handleOpenSearchSchool = () => {
    openDialog(SearchSchoolDialog, {
      onConfirm: () => {
        console.log("확인");
      },
      onClose: () => {
        console.log("닫기");
      },
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
