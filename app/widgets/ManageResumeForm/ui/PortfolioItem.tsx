import { Trash2 } from "lucide-react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import { Button, Input, useResponsive } from "@/shared";

import { ResumeFormDto, ResumeListType } from "../model/type";

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
  const { isMobile } = useResponsive();

  return (
    <div className="flex flex-col gap-5 rounded-lg border p-6 not-xl:p-4">
      {isMobile ? (
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">링크</p>
            <Button
              className="size-8 rounded-sm p-0"
              variant="ghost"
              type="button"
              onClick={() => remove(index, "portfolio")}
            >
              <Trash2 className="size-4 text-gray-400" />
            </Button>
          </div>
          <Controller
            control={control}
            name={`portfolioList.${index}.url`}
            render={({ field }) => (
              <Input
                className="max-w-[658px] not-xl:max-w-full"
                variant="underline"
                placeholder="https://"
                value={typeof field.value === "string" ? field.value : ""}
                onChange={field.onChange}
                inputMode="url"
              />
            )}
          />
        </div>
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex flex-1 flex-col gap-2">
            <p className="text-muted-foreground">링크</p>
            <Controller
              control={control}
              name={`portfolioList.${index}.url`}
              render={({ field }) => (
                <Input
                  className="max-w-[658px] not-xl:max-w-full"
                  variant="underline"
                  placeholder="https://"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  inputMode="url"
                />
              )}
            />
          </div>
          <Button
            className="size-8 rounded-sm p-0"
            variant="ghost"
            type="button"
            onClick={() => remove(index, "portfolio")}
          >
            <Trash2 className="size-4 text-gray-400" />
          </Button>
        </div>
      )}
    </div>
  );
}
