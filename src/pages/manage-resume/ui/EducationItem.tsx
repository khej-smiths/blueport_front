"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Trash2 } from "lucide-react";
import { EducationDto } from "../model/type";
import {
  Button,
  Input,
  Label,
  ToggleGroup,
  ToggleGroupItem,
  useDialogStore,
} from "@/shared";

interface Props {
  key: React.Key;
  item: EducationDto;
  educationList: EducationDto[];
  setEducationList: Dispatch<SetStateAction<EducationDto[]>>;
}

type EducationStatus = "graduate" | "attend" | "expected";

export function EducationItem({
  item,
  educationList,
  setEducationList,
}: Props) {
  const [status, setStatus] = useState<EducationStatus>("graduate");
  const { setOpen } = useDialogStore();

  const handleOpenSearchSchool = () => {
    setOpen(true);
  };

  const handleDeleteItem = () => {
    if (educationList.length === 1) return;

    setEducationList((prev) => prev.filter((edu) => edu.id !== item.id));
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-6">
      <div className="flex flex-row justify-between">
        <div className="flex min-w-[330px] flex-row gap-2">
          <Input
            className="focus-visible:none hover:border-primary"
            variant="underline"
            readOnly
            value="test"
          />
          <Button onClick={handleOpenSearchSchool}>학교 찾아보기</Button>
        </div>
        <div className="flex flex-row gap-1">
          <Button
            className="size-8 rounded-sm p-0"
            variant="ghost"
            onClick={handleDeleteItem}
          >
            <Trash2 className="size-4 text-gray-400" />
          </Button>
        </div>
      </div>
      <>기간</>
      <ToggleGroup type="single" className="w-fit">
        <ToggleGroupItem value="graduate">졸업</ToggleGroupItem>
        <ToggleGroupItem value="attend">재학중</ToggleGroupItem>
        <ToggleGroupItem value="expected">졸업예정</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
