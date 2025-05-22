import { Trash2 } from "lucide-react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import { Button, Input, ToggleGroup, ToggleGroupItem } from "@/shared";

import { PortfolioType, ResumeFormDto, ResumeListType } from "../model/type";

interface Props {
  key: React.Key;
  index: number;
  control: Control<ResumeFormDto, any>;
  watch: UseFormWatch<ResumeFormDto>;
  setValue: UseFormSetValue<ResumeFormDto>;
  remove: (index: number, type: ResumeListType) => void;
}

export function PortfolioItem({
  control,
  index,
  watch,
  setValue,
  remove,
}: Props) {
  const handleChangeType = (
    value: PortfolioType,
    onChange: (...event: any[]) => void
  ) => {
    onChange(value);

    if (value === "link") {
      setValue(`portfolioList.${index}.file`, null);
    } else {
      setValue(`portfolioList.${index}.url`, "");
    }
  };
  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6">
      <div className="flex items-center justify-between">
        <Controller
          control={control}
          name={`portfolioList.${index}.type`}
          render={({ field }) => (
            <ToggleGroup
              type="single"
              variant="outline"
              value={field.value}
              onValueChange={(value: PortfolioType) =>
                handleChangeType(value, field.onChange)
              }
            >
              <ToggleGroupItem value="link">링크</ToggleGroupItem>
              <ToggleGroupItem value="file">파일</ToggleGroupItem>
            </ToggleGroup>
          )}
        />
        <Button
          className="size-8 rounded-sm p-0"
          variant="ghost"
          onClick={() => remove(index, "portfolio")}
        >
          <Trash2 className="size-4 text-gray-400" />
        </Button>
      </div>
      {watch(`portfolioList.${index}.type`) === "link" ? (
        <Controller
          control={control}
          name={`portfolioList.${index}.url`}
          render={({ field }) => (
            <Input
              className="max-w-[616px]"
              variant="underline"
              placeholder="https://"
              value={typeof field.value === "string" ? field.value : ""}
              onChange={field.onChange}
            />
          )}
        />
      ) : (
        <Controller
          control={control}
          name={`portfolioList.${index}.file`}
          render={({ field }) => (
            <Input
              type="file"
              className="max-w-[616px] cursor-pointer"
              variant="underline"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? undefined;
                field.onChange(file);
              }}
            />
          )}
        />
      )}
    </div>
  );
}
