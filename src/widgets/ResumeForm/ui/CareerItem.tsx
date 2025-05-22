import { Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

import {
  Button,
  Input,
  MonthPicker,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared";

import { ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  setValue: UseFormSetValue<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

type StatusType = "working" | "quit";

export function CareerItem({ index, control, setValue, remove }: Props) {
  const [status, setStatus] = useState<StatusType>("working");

  const handleChangeStatus = useCallback(
    (value: StatusType) => {
      setStatus(value);

      if (status === "quit") {
        setValue(`careerList.${index}.quitDate`, undefined);
      }

      return;
    },
    [index, setValue, status]
  );

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <div className="flex items-center justify-between">
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
      <div className="flex items-center gap-5">
        <ToggleGroup
          type="single"
          variant="outline"
          value={status}
          onValueChange={(value: StatusType) => handleChangeStatus(value)}
        >
          <ToggleGroupItem value="working">재직중</ToggleGroupItem>
          <ToggleGroupItem value="quit">퇴직</ToggleGroupItem>
        </ToggleGroup>
        <div className="flex gap-2">
          <Controller
            control={control}
            name={`careerList.${index}.joinDate`}
            render={({ field }) => (
              <MonthPicker
                date={field.value}
                setDate={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
        {status === "quit" && (
          <>
            <p> ~ </p>
            <div className="flex gap-2">
              <Controller
                control={control}
                name={`careerList.${index}.quitDate`}
                render={({ field }) => (
                  <MonthPicker
                    date={field.value}
                    setDate={(value) => field.onChange(value)}
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
