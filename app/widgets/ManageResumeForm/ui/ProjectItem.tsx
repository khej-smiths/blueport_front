import { Trash2 } from "lucide-react";
import { KeyboardEvent, useRef, useState } from "react";
import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import {
  Button,
  Hashtag,
  Input,
  MonthPicker,
  onlyNumber,
  Textarea,
} from "@/shared";

import { ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  setValue: UseFormSetValue<ResumeFormDto>;
  getValues: UseFormGetValues<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

export function ProjectItem({
  control,
  index,
  watch,
  setValue,
  getValues,
  remove,
}: Props) {
  const isComposing = useRef(false); // 리렌더링 방지를 위해 ref로 관리
  const [skillKeyword, setSkillKeyword] = useState("");

  const handleAddSkill = () => {
    if (skillKeyword.trim() === "") return;
    const currentList = getValues(`projectList.${index}.skillList`);

    setValue(`projectList.${index}.skillList`, [
      ...currentList,
      skillKeyword.trim(),
    ]);
    setSkillKeyword("");
    return;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.code;

    if (isComposing.current) return; // 조합 중인 문자는 무시하고 기술스택 추가
    // onKeyDown 이벤트는 김치찌개 라는 글자를 입력 중 마지막 개 글자를 입력 하더라도
    // 이를 문자 입력 중인 상태로 판단함 이 때 이벤트가 발생 시 김치찌개와 개라는 글자가 skill에 추가됨
    // onKeyDown 발생 시에는 조합 중인 문자를 별도의 데이터로 판단하기 때문에
    // 문자 조합이 끝났는지에 대해 isComposing 이라는 ref 값으로 감지하고
    // 조합 중인 문자는 onKeyDown 이벤트가 발생하지 않도록 처리함

    if (
      skillKeyword !== "" &&
      (key === "Enter" || key === "Comma" || key === "Space")
    ) {
      handleAddSkill();
      event.preventDefault(); // , 문자 입력 방지
    }
  };

  const handleDeleteSkill = (i: number) => {
    const currentList = getValues(`projectList.${index}.skillList`);
    setValue(
      `projectList.${index}.skillList`,
      currentList.filter((_, target) => target !== i)
    );
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6 not-xl:p-4">
      <div className="flex items-center justify-between not-xl:gap-5">
        <Controller
          control={control}
          name={`projectList.${index}.name`}
          render={({ field }) => (
            <Input
              className="max-w-[616px] not-xl:max-w-full"
              variant="underline"
              placeholder="프로젝트 이름을 입력해 주세요"
              {...field}
            />
          )}
        />
        <Button
          className="size-8 rounded-sm p-0"
          variant="ghost"
          type="button"
          onClick={() => remove(index, "project")}
        >
          <Trash2 className="size-4 text-gray-400" />
        </Button>
      </div>
      <div className="flex items-center gap-5 not-xl:flex-col not-xl:items-start">
        <Controller
          control={control}
          name={`projectList.${index}.projectDate`}
          render={({ field }) => (
            <MonthPicker
              range
              rangeDate={field.value}
              setRangeDate={field.onChange}
              placeholder="프로젝트 기간"
            />
          )}
        />
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground">프로젝트 참여 인원</p>
          <Controller
            control={control}
            name={`projectList.${index}.personnel`}
            render={({ field }) => (
              <Input
                className="max-w-14"
                variant="underline"
                value={field.value}
                onChange={(e) => onlyNumber(e, field.onChange)}
                inputMode="numeric"
              />
            )}
          />
          <p className="text-muted-foreground">명</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ul className="scrollbar-hide flex gap-2 overflow-x-auto">
          {watch(`projectList.${index}.skillList`).map((item, i) => (
            <li key={`${index}_${item}_${i}`}>
              <Hashtag hashtag={item} onClick={() => handleDeleteSkill(i)} />
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <Input
            className="max-w-60 not-xl:max-w-full"
            variant="underline"
            placeholder="사용된 기술을 추가해 주세요"
            value={skillKeyword}
            onChange={(e) => setSkillKeyword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            onCompositionStart={() => {
              isComposing.current = true;
            }} // 아시아권 문자 입력 시 발생하는 문자 입력 상태 감지
            onCompositionEnd={() => {
              isComposing.current = false;
            }} // 문자 입력 상태를 감지하여 기술스택 입력
          />
          <Button variant="outline" type="button" onClick={handleAddSkill}>
            추가
          </Button>
        </div>
      </div>
      <Controller
        control={control}
        name={`projectList.${index}.description`}
        render={({ field }) => (
          <Textarea
            className="not-xl:resize-none"
            placeholder={`프로젝트 단위로 본인의 역활과 성과를 작성해 보세요

- 업무 주요 내용, 역활, 기여도, 성과등을 작성해 보세요
- 본인의 역량과 업무 능숙도를 어필해 보세요`}
            {...field}
          />
        )}
      />
    </div>
  );
}
