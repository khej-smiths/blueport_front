import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import { SearchSchoolDialog } from "@/features";
import {
  AlertDialog,
  AlertDialogTrigger,
  Button,
  Input,
  MonthPicker,
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared";

import { EducationStatus, ResumeFormDto, ResumeListType } from "../model/type";
interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  remove: (index: number, type: ResumeListType) => void;
  watch: UseFormWatch<ResumeFormDto>;
  setValue: UseFormSetValue<ResumeFormDto>;
}

export function EducationItem({
  index,
  control,
  remove,
  watch,
  setValue,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSelectSchool = (schoolName: string) => {
    setValue(`educationList.${index}.schoolName`, schoolName);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <AlertDialog open={open}>
            <AlertDialogTrigger>
              <Button
                className="min-w-[212px]"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                학교 찾아보기
              </Button>
            </AlertDialogTrigger>
            <SearchSchoolDialog
              handleSelectSchool={handleSelectSchool}
              setOpen={setOpen}
            />
          </AlertDialog>
          <Controller
            control={control}
            name={`educationList.${index}.schoolName`}
            render={({ field }) => (
              <Input
                className="focus-visible:none min-w-96 hover:border-primary"
                variant="underline"
                readOnly
                value={field.value}
              />
            )}
          />
        </div>
        <Button
          className="size-8 rounded-sm p-0"
          variant="ghost"
          onClick={() => remove(index, "education")}
        >
          <Trash2 className="size-4 text-gray-400" />
        </Button>
      </div>
      <div className="flex items-center">
        <Controller
          control={control}
          name={`educationList.${index}.specialty`}
          render={({ field }) => (
            <Input
              className="max-w-[616px]"
              variant="underline"
              placeholder="전공을 입력해 주세요"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex items-center gap-5">
        <Controller
          control={control}
          name={`educationList.${index}.educationStatus`}
          render={({ field }) => (
            <ToggleGroup
              type="single"
              variant="outline"
              className="w-fit max-w-[212px]"
              value={field.value}
              onValueChange={(value: EducationStatus) => field.onChange(value)}
            >
              <ToggleGroupItem value="graduate">졸업</ToggleGroupItem>
              <ToggleGroupItem value="attend">재학중</ToggleGroupItem>
              <ToggleGroupItem value="expected">졸업예정</ToggleGroupItem>
            </ToggleGroup>
          )}
        />
        <div className="flex gap-2">
          <Controller
            control={control}
            name={`educationList.${index}.admissionDate`}
            render={({ field }) => (
              <MonthPicker
                date={field.value}
                setDate={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
        {watch(`educationList.${index}.educationStatus`) !== "attend" && (
          <>
            <p> ~ </p>
            <Controller
              control={control}
              name={`educationList.${index}.graduationDate`}
              render={({ field }) => (
                <MonthPicker
                  date={field.value}
                  setDate={(value) => field.onChange(value)}
                />
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
