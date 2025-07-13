import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import { SearchSchoolDialog } from "@/entities";
import {
  AlertDialog,
  AlertDialogTrigger,
  Button,
  CustomSelect,
  Graduation_Status,
  Input,
  MonthPicker,
  onlyNumber,
  ToggleGroup,
  ToggleGroupItem,
  useResponsive,
} from "@/shared";

import { ResumeFormDto, ResumeListType } from "../model/type";
import { getStandardGradeOptions } from "../consts";
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

  const { isMobile } = useResponsive();

  const handleSelectSchool = (schoolName: string) => {
    setValue(`educationList.${index}.name`, schoolName);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6 not-xl:gap-5 not-xl:p-4">
      {isMobile ? (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <AlertDialog open={open}>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  type="button"
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
            <Button
              className="size-8 rounded-sm p-0"
              variant="ghost"
              type="button"
              onClick={() => remove(index, "education")}
            >
              <Trash2 className="size-4 text-gray-400" />
            </Button>
          </div>
          <Controller
            control={control}
            name={`educationList.${index}.name`}
            render={({ field }) => (
              <Input
                className="focus-visible:none hover:border-primary"
                variant="underline"
                readOnly
                value={field.value}
              />
            )}
          />
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex max-w-[658px] flex-1 items-center gap-5">
            <AlertDialog open={open}>
              <AlertDialogTrigger asChild>
                <Button
                  className="min-w-[212px]"
                  variant="outline"
                  type="button"
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
              name={`educationList.${index}.name`}
              render={({ field }) => (
                <Input
                  className="focus-visible:none hover:border-primary"
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
            type="button"
            onClick={() => remove(index, "education")}
          >
            <Trash2 className="size-4 text-gray-400" />
          </Button>
        </div>
      )}
      <div className="flex max-w-[658px] items-center not-xl:max-w-full">
        <Controller
          control={control}
          name={`educationList.${index}.major`}
          render={({ field }) => (
            <Input
              variant="underline"
              placeholder="전공을 입력해 주세요"
              {...field}
            />
          )}
        />
      </div>
      {isMobile ? (
        <div className="flex flex-col gap-5">
          <Controller
            control={control}
            name={`educationList.${index}.standardGrade`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getStandardGradeOptions()}
                placeholder="기준 학점 선택해 주세요"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name={`educationList.${index}.grade`}
            render={({ field }) => (
              <Input
                variant="underline"
                placeholder="학점 입력해 주세요"
                inputMode="decimal"
                disabled={
                  watch(`educationList.${index}.standardGrade`) === "none"
                }
                value={field.value}
                onChange={(e) => onlyNumber(e, field.onChange, true)}
              />
            )}
          />
        </div>
      ) : (
        <div className="flex max-w-[658px] gap-4">
          <Controller
            control={control}
            name={`educationList.${index}.grade`}
            render={({ field }) => (
              <Input
                variant="underline"
                placeholder="학점 입력해 주세요"
                disabled={
                  watch(`educationList.${index}.standardGrade`) === "none"
                }
                value={field.value}
                onChange={(e) => onlyNumber(e, field.onChange, true)}
              />
            )}
          />
          <Controller
            control={control}
            name={`educationList.${index}.standardGrade`}
            render={({ field }) => (
              <CustomSelect
                selectOptions={getStandardGradeOptions()}
                placeholder="기준 학점 입력해 주세요"
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
      )}

      <div className="flex items-center gap-5 not-xl:w-full not-xl:flex-col">
        <Controller
          control={control}
          name={`educationList.${index}.graduationStatus`}
          render={({ field }) => (
            <ToggleGroup
              type="single"
              variant="outline"
              className="w-fit max-w-[212px] not-xl:w-full not-xl:max-w-full"
              value={field.value}
              onValueChange={(value: Graduation_Status) => {
                if (value === "ENROLLED") {
                  setValue(`educationList.${index}.endAt`, null);
                }
                field.onChange(value);
              }}
            >
              <ToggleGroupItem className="not-xl:w-full" value="GRADUATED">
                졸업
              </ToggleGroupItem>
              <ToggleGroupItem className="not-xl:w-full" value="ENROLLED">
                재학중
              </ToggleGroupItem>
              <ToggleGroupItem
                className="not-xl:w-full"
                value="EXPECTED_GRADUATION"
              >
                졸업예정
              </ToggleGroupItem>
            </ToggleGroup>
          )}
        />
        <div className="flex items-center gap-2 not-xl:w-full">
          <Controller
            control={control}
            name={`educationList.${index}.startAt`}
            render={({ field }) => (
              <MonthPicker
                date={field.value}
                setDate={(value) => field.onChange(value)}
                placeholder="입학일"
              />
            )}
          />
          {watch(`educationList.${index}.graduationStatus`) !== "ENROLLED" && (
            <>
              <p> ~ </p>
              <Controller
                control={control}
                name={`educationList.${index}.endAt`}
                render={({ field }) => (
                  <MonthPicker
                    date={field.value}
                    setDate={(value) => field.onChange(value)}
                    placeholder="졸업일"
                  />
                )}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
