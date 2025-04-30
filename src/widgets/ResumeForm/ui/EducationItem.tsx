"use client";

import { Trash2 } from "lucide-react";
import { EducationStatus, ResumeFormDto, ResumeListType } from "../model/type";
import {
  Button,
  CustomSelect,
  Input,
  ToggleGroup,
  ToggleGroupItem,
  useDialogStore,
} from "@/shared";
import { Control, Controller, UseFormWatch } from "react-hook-form";
import { getMonthOptions, getYearOptions } from "../consts";
import { Dispatch, SetStateAction } from "react";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  remove: (index: number, type: ResumeListType) => void;
  watch: UseFormWatch<ResumeFormDto>;
  setModalCallerIndex: Dispatch<SetStateAction<number>>;
}

export function EducationItem({
  index,
  control,
  remove,
  watch,
  setModalCallerIndex,
}: Props) {
  const { setOpen } = useDialogStore();

  const handleOpenSearchSchool = () => {
    setOpen(true);
    setModalCallerIndex(index);
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
        <div className="flex flex-row gap-1">
          <Button
            className="size-8 rounded-sm p-0"
            variant="ghost"
            onClick={() => remove(index, "education")}
          >
            <Trash2 className="size-4 text-gray-400" />
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center">
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
      <div className="flex flex-row items-center gap-5">
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
        <div className="flex flex-row gap-2">
          <Controller
            control={control}
            name={`educationList.${index}.admissionYear`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getYearOptions()}
                placeholder="입학 연도"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name={`educationList.${index}.admissionMonth`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getMonthOptions()}
                placeholder="입학 월"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
        {watch(`educationList.${index}.educationStatus`) !== "attend" && (
          <>
            <p> ~ </p>
            <div className="flex flex-row gap-2">
              <Controller
                control={control}
                name={`educationList.${index}.graduationYear`}
                render={({ field }) => (
                  <CustomSelect
                    selectOptions={getYearOptions()}
                    placeholder="졸업 연도"
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                )}
              />
              <Controller
                control={control}
                name={`educationList.${index}.graduationMonth`}
                render={({ field }) => (
                  <CustomSelect
                    selectOptions={getMonthOptions()}
                    placeholder="졸업 월"
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
