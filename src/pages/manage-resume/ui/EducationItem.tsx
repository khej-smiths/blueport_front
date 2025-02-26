"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Trash2 } from "lucide-react";
import { EducationDto } from "../model/type";
import {
  Button,
  DatePicker,
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
  const [startDate, setStartDate] = useState<Date | undefined>();
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
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-5">
          <Button
            className="min-w-[212px]"
            variant="outline"
            onClick={handleOpenSearchSchool}
          >
            학교 찾아보기
          </Button>
          <Input
            className="focus-visible:none w-full hover:border-primary"
            variant="underline"
            readOnly
            value="test"
          />
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
      <div className="flex flex-row items-center">
        <Input
          className="max-w-[430px]"
          variant="underline"
          placeholder="전공을 입력해 주세요"
        />
      </div>
      <div className="flex flex-row items-center gap-5">
        <ToggleGroup
          type="single"
          variant="outline"
          className="w-fit max-w-[212px]"
        >
          <ToggleGroupItem value="graduate">졸업</ToggleGroupItem>
          <ToggleGroupItem value="attend">재학중</ToggleGroupItem>
          <ToggleGroupItem value="expected">졸업예정</ToggleGroupItem>
        </ToggleGroup>
        <DatePicker date={startDate} setDate={setStartDate} />
      </div>
    </div>
  );
}
