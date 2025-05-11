"use client";

import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { ResumeFormDto, ResumeListType } from "../model/type";
import {
  Button,
  CustomSelect,
  Input,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared";
import { Trash2 } from "lucide-react";
import { getMonthOptions, getYearOptions } from "../consts";
import { useCallback, useState } from "react";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  setValue: UseFormSetValue<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

type StatusType = "working" | "quit";

export function CareerItem({ index, control, watch, setValue, remove }: Props) {
  const [status, setStatus] = useState<StatusType>("working");

  const handleChangeStatus = useCallback(
    (value: StatusType) => {
      setStatus(value);

      if (status === "quit") {
        setValue(`careerList.${index}.quitYear`, undefined);
        setValue(`careerList.${index}.quitMonth`, undefined);
      }

      return;
    },
    [index, setValue, status]
  );

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <div className="flex flex-row items-center justify-between">
        <Controller
          control={control}
          name={`careerList.${index}.companyName`}
          render={({ field }) => (
            <Input
              className="max-w-[616px]"
              variant="underline"
              placeholder="회사명을 입력해 주세요"
              {...field}
            />
          )}
        />
        <Button
          className="size-8 rounded-sm p-0"
          variant="ghost"
          onClick={() => remove(index, "career")}
        >
          <Trash2 className="size-4 text-gray-400" />
        </Button>
      </div>
      <div className="flex flex-row items-center gap-5">
        <ToggleGroup
          type="single"
          variant="outline"
          value={status}
          onValueChange={(value: StatusType) => handleChangeStatus(value)}
        >
          <ToggleGroupItem value="working">재직중</ToggleGroupItem>
          <ToggleGroupItem value="quit">퇴직</ToggleGroupItem>
        </ToggleGroup>
        <div className="flex flex-row gap-2">
          <Controller
            control={control}
            name={`careerList.${index}.joinYear`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getYearOptions()}
                placeholder="입사 연도"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name={`careerList.${index}.joinMonth`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getMonthOptions()}
                placeholder="입사 월"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
        {status === "quit" && (
          <>
            <p> ~ </p>
            <div className="flex flex-row gap-2">
              <Controller
                control={control}
                name={`careerList.${index}.quitYear`}
                render={({ field }) => (
                  <CustomSelect
                    selectOptions={getYearOptions()}
                    placeholder="퇴사 연도"
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                )}
              />
              <Controller
                control={control}
                name={`careerList.${index}.quitMonth`}
                render={({ field }) => (
                  <CustomSelect
                    selectOptions={getMonthOptions()}
                    placeholder="퇴사 월"
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>
          </>
        )}
      </div>
      <Controller
        control={control}
        name={`careerList.${index}.position`}
        render={({ field }) => (
          <Input
            className="max-w-[616px]"
            variant="underline"
            placeholder="직책을 입력해 주세요"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={`careerList.${index}.description`}
        render={({ field }) => (
          <Textarea
            placeholder={`담당업무를 입력해 주세요

- 진행한 업무를 다 적기 보다는 경력 사항별로 중요한 내용만 엄선해서 작성하는 것이 중요합니다!
- 담당한 업무 내용을 요약해서 작성해보세요!`}
            {...field}
          />
        )}
      />
    </div>
  );
}
