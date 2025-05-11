import { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { cn } from "../../lib/cn";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import MonthCalendar from "../MonthCalendar";

interface Props {
  date?: Date | null;
  setDate: Dispatch<SetStateAction<Date>>;
}

export function MonthPicker({ date, setDate }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[200px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "yyyy.MM", { locale: ko })
          ) : (
            <span>날짜를 선택해 주세요.</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <MonthCalendar select={date ? date : new Date()} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}
