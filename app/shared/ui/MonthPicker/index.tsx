import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { cn } from "../../lib/cn";
import { Button } from "../Button";
import MonthCalendar from "../MonthCalendar";
import { MonthRangeCalendar } from "../MonthRangeCalendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

interface Props {
  date?: Date | null;
  setDate?: Dispatch<SetStateAction<Date>>;
  range?: boolean;
  rangeDate?: {
    start: Date | null;
    end: Date | null;
  };
  setRangeDate?: ({ start, end }: { start: Date; end: Date }) => void;
}

export function MonthPicker({
  date,
  setDate,
  range,
  rangeDate,
  setRangeDate,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-fit justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {range ? (
            rangeDate && rangeDate.start && rangeDate.end ? (
              `${format(rangeDate.start, "yyyy.MM", { locale: ko })} ~ ${format(rangeDate.end, "yyyy.MM", { locale: ko })}`
            ) : (
              <span>날짜를 입력해 주세요</span>
            )
          ) : date ? (
            format(date, "yyyy.MM", { locale: ko })
          ) : (
            <span>날짜를 선택해 주세요.</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {!range ? (
          <MonthCalendar select={date ? date : new Date()} onSelect={setDate} />
        ) : (
          <MonthRangeCalendar
            showQuickSelectors={false}
            onMonthRangeSelect={setRangeDate}
            selectedMonthRange={rangeDate}
            callbacks={{
              yearLabel: (year) => `${year}년`,
            }}
            maxDate={new Date()}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
