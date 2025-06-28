import { Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
  useWatch,
} from "react-hook-form";

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
  watch: UseFormWatch<ResumeFormDto>;
  setValue: UseFormSetValue<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

type StatusType = "working" | "quit";

export function CareerItem({ index, control, watch, setValue, remove }: Props) {
  const [status, setStatus] = useState<StatusType>("working");

  // 렌더링되어있지 않은 상태에서 값의 변경을 감지하기 위하여 useWatch 사용
  const endAt = useWatch({
    control,
    name: `careerList.${index}.endAt`,
  });

  const handleChangeStatus = useCallback(
    (value: StatusType) => {
      if (value === "working") {
        setValue(`careerList.${index}.endAt`, null);
      }

      setStatus(value);

      return;
    },
    [index, setValue, status]
  );

  // 서버에서 받아온 종료일이 있을 경우 퇴직 상태로 변경
  useEffect(() => {
    if (endAt) {
      setStatus("quit");
    }
  }, [endAt]);

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6 not-xl:p-4">
      <div className="flex items-center justify-between not-xl:gap-5">
        <Controller
          control={control}
          name={`careerList.${index}.company`}
          render={({ field }) => (
            <Input
              className="max-w-[658px] not-xl:max-w-full"
              variant="underline"
              placeholder="회사명을 입력해 주세요"
              {...field}
            />
          )}
        />
        <Button
          className="size-8 rounded-sm p-0"
          variant="ghost"
          type="button"
          onClick={() => remove(index, "career")}
        >
          <Trash2 className="size-4 text-gray-400" />
        </Button>
      </div>
      <div className="flex max-w-[658px] gap-4 not-xl:max-w-full not-xl:flex-col not-xl:gap-5">
        <Controller
          control={control}
          name={`careerList.${index}.department`}
          render={({ field }) => (
            <Input
              className="max-w-[616px] not-xl:max-w-full"
              variant="underline"
              placeholder="부서를 입력해 주세요"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={`careerList.${index}.position`}
          render={({ field }) => (
            <Input
              className="max-w-[616px] not-xl:max-w-full"
              variant="underline"
              placeholder="직책을 입력해 주세요"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex items-center gap-5 not-xl:w-full not-xl:flex-col">
        <ToggleGroup
          type="single"
          variant="outline"
          className="not-xl:w-full not-xl:max-w-full"
          value={status}
          onValueChange={(value: StatusType) => handleChangeStatus(value)}
        >
          <ToggleGroupItem className="not-xl:w-full" value="working">
            재직중
          </ToggleGroupItem>
          <ToggleGroupItem className="not-xl:w-full" value="quit">
            퇴직
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="flex items-center gap-2 not-xl:w-full">
          <Controller
            control={control}
            name={`careerList.${index}.startAt`}
            render={({ field }) => (
              <MonthPicker
                date={field.value}
                setDate={(value) => field.onChange(value)}
                placeholder="입사일"
              />
            )}
          />
          {status === "quit" && (
            <>
              <p> ~ </p>
              <Controller
                control={control}
                name={`careerList.${index}.endAt`}
                render={({ field }) => (
                  <MonthPicker
                    date={field.value}
                    setDate={(value) => field.onChange(value)}
                    placeholder="퇴사일"
                  />
                )}
              />
            </>
          )}
        </div>
      </div>
      <Controller
        control={control}
        name={`careerList.${index}.description`}
        render={({ field }) => (
          <Textarea
            className="not-xl:resize-none"
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
