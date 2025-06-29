import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/cn";
import { buttonVariants } from "../Button";

type Month = {
  number: number;
  name: string;
  yearOffset: number;
};

const MONTHS: Month[][] = [
  [
    { number: 0, name: "1월", yearOffset: 0 },
    { number: 1, name: "2월", yearOffset: 0 },
    { number: 2, name: "3월", yearOffset: 0 },
    { number: 3, name: "4월", yearOffset: 0 },
    { number: 0, name: "1월", yearOffset: 1 },
    { number: 1, name: "2월", yearOffset: 1 },
    { number: 2, name: "3월", yearOffset: 1 },
    { number: 3, name: "4월", yearOffset: 1 },
  ],
  [
    { number: 4, name: "5월", yearOffset: 0 },
    { number: 5, name: "6월", yearOffset: 0 },
    { number: 6, name: "7월", yearOffset: 0 },
    { number: 7, name: "8월", yearOffset: 0 },
    { number: 4, name: "5월", yearOffset: 1 },
    { number: 5, name: "6월", yearOffset: 1 },
    { number: 6, name: "7월", yearOffset: 1 },
    { number: 7, name: "8월", yearOffset: 1 },
  ],
  [
    { number: 8, name: "9월", yearOffset: 0 },
    { number: 9, name: "10월", yearOffset: 0 },
    { number: 10, name: "11월", yearOffset: 0 },
    { number: 11, name: "12월", yearOffset: 0 },
    { number: 8, name: "9월", yearOffset: 1 },
    { number: 9, name: "10월", yearOffset: 1 },
    { number: 10, name: "11월", yearOffset: 1 },
    { number: 11, name: "12월", yearOffset: 1 },
  ],
];

type QuickSelector = {
  label: string;
  startMonth: Date;
  endMonth: Date;
  variant?: ButtonVariant;
  onClick?: (selector: QuickSelector) => void;
};

type MonthRangeCalProps = {
  selectedMonthRange?: { start: Date | null; end: Date | null };
  onStartMonthSelect?: (date: Date) => void;
  onMonthRangeSelect?: ({ start, end }: { start: Date; end: Date }) => void;
  onYearForward?: () => void;
  onYearBackward?: () => void;
  callbacks?: {
    yearLabel?: (year: number) => string;
    monthLabel?: (month: Month) => string;
  };
  variant?: {
    calendar?: {
      main?: ButtonVariant;
      selected?: ButtonVariant;
    };
    chevrons?: ButtonVariant;
  };
  minDate?: Date;
  maxDate?: Date;
  quickSelectors?: QuickSelector[];
  showQuickSelectors?: boolean;
};

type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "secondary"
  | null
  | undefined;

function MonthRangeCalendar({
  onMonthRangeSelect,
  onStartMonthSelect,
  callbacks,
  selectedMonthRange,
  onYearBackward,
  onYearForward,
  variant,
  minDate,
  maxDate,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & MonthRangeCalProps) {
  return (
    <div
      className={cn(
        "min-w-[400px] p-3 not-xl:w-full not-xl:min-w-0 not-xl:p-1",
        className
      )}
      {...props}
    >
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="w-full">
          <MonthRangeCal
            onMonthRangeSelect={onMonthRangeSelect}
            onStartMonthSelect={onStartMonthSelect}
            callbacks={callbacks}
            selectedMonthRange={selectedMonthRange}
            onYearBackward={onYearBackward}
            onYearForward={onYearForward}
            variant={variant}
            minDate={minDate}
            maxDate={maxDate}
          ></MonthRangeCal>
        </div>
      </div>
    </div>
  );
}

function MonthRangeCal({
  selectedMonthRange,
  onMonthRangeSelect,
  onStartMonthSelect,
  callbacks,
  variant,
  minDate,
  maxDate,
  onYearBackward,
  onYearForward,
}: MonthRangeCalProps) {
  const [startYear, setStartYear] = React.useState<number>(
    selectedMonthRange?.start?.getFullYear() ?? new Date().getFullYear()
  );
  const [startMonth, setStartMonth] = React.useState<number>(
    selectedMonthRange?.start?.getMonth() ?? new Date().getMonth()
  );
  const [endYear, setEndYear] = React.useState<number>(
    selectedMonthRange?.end?.getFullYear() ?? new Date().getFullYear()
  );
  const [endMonth, setEndMonth] = React.useState<number>(
    selectedMonthRange?.end?.getMonth() ?? new Date().getMonth()
  );
  const [rangePending, setRangePending] = React.useState<boolean>(false);
  const [endLocked, setEndLocked] = React.useState<boolean>(true);
  const [menuYear, setMenuYear] = React.useState<number>(startYear);

  if (minDate && maxDate && minDate > maxDate) minDate = maxDate;

  return (
    <div className="flex gap-4">
      <div className="min-w-[400px] space-y-4 not-xl:w-full not-xl:min-w-0">
        <div className="relative flex items-center justify-evenly pt-1">
          <div className="text-sm font-medium">
            {callbacks?.yearLabel ? callbacks?.yearLabel(menuYear) : menuYear}
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => {
                setMenuYear(menuYear - 1);
                if (onYearBackward) onYearBackward();
              }}
              className={cn(
                buttonVariants({ variant: variant?.chevrons ?? "outline" }),
                "absolute left-1 inline-flex h-7 w-7 items-center justify-center p-0 not-xl:h-5 not-xl:w-5"
              )}
            >
              <ChevronLeft className="h-4 w-4 opacity-50" />
            </button>
            <button
              onClick={() => {
                setMenuYear(menuYear + 1);
                if (onYearForward) onYearForward();
              }}
              className={cn(
                buttonVariants({ variant: variant?.chevrons ?? "outline" }),
                "absolute right-1 inline-flex h-7 w-7 items-center justify-center p-0 not-xl:h-5 not-xl:w-5"
              )}
            >
              <ChevronRight className="h-4 w-4 opacity-50" />
            </button>
          </div>
          <div className="text-sm font-medium">
            {callbacks?.yearLabel
              ? callbacks?.yearLabel(menuYear + 1)
              : menuYear + 1}
          </div>
        </div>
        <table className="w-full border-collapse space-y-1">
          <tbody>
            {MONTHS.map((monthRow, a) => {
              return (
                <tr key={"row-" + a} className="mt-2 flex w-full">
                  {monthRow.map((m, i) => {
                    return (
                      <td
                        key={m.number + "-" + m.yearOffset}
                        className={cn(
                          cn(
                            cn(
                              cn(
                                "[&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 relative h-10 w-1/4 p-0 text-center text-sm not-xl:h-8 not-xl:w-9 focus-within:relative focus-within:z-20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-range-end)]:rounded-r-md",
                                (menuYear + m.yearOffset > startYear ||
                                  (menuYear + m.yearOffset == startYear &&
                                    m.number > startMonth)) &&
                                  (menuYear + m.yearOffset < endYear ||
                                    (menuYear + m.yearOffset == endYear &&
                                      m.number < endMonth)) &&
                                  (rangePending || endLocked)
                                  ? "bg-accent text-accent-foreground"
                                  : ""
                              ),
                              menuYear + m.yearOffset == startYear &&
                                m.number == startMonth &&
                                (rangePending || endLocked)
                                ? "bg-accent text-accent-foreground rounded-l-md"
                                : ""
                            ),
                            menuYear + m.yearOffset == endYear &&
                              m.number == endMonth &&
                              (rangePending || endLocked) &&
                              menuYear + m.yearOffset >= startYear &&
                              m.number >= startMonth
                              ? "bg-accent text-accent-foreground rounded-r-md"
                              : ""
                          ),
                          i == 3 ? "mr-2" : i == 4 ? "ml-2" : ""
                        )}
                        onMouseEnter={() => {
                          if (rangePending && !endLocked) {
                            setEndYear(menuYear + m.yearOffset);
                            setEndMonth(m.number);
                          }
                        }}
                      >
                        <button
                          onClick={() => {
                            if (rangePending) {
                              if (
                                menuYear + m.yearOffset < startYear ||
                                (menuYear + m.yearOffset == startYear &&
                                  m.number < startMonth)
                              ) {
                                setRangePending(true);
                                setEndLocked(false);
                                setStartMonth(m.number);
                                setStartYear(menuYear + m.yearOffset);
                                setEndYear(menuYear + m.yearOffset);
                                setEndMonth(m.number);
                                if (onStartMonthSelect)
                                  onStartMonthSelect(
                                    new Date(menuYear + m.yearOffset, m.number)
                                  );
                              } else {
                                setRangePending(false);
                                setEndLocked(true);
                                // Event fire data selected

                                if (onMonthRangeSelect)
                                  onMonthRangeSelect({
                                    start: new Date(startYear, startMonth),
                                    end: new Date(
                                      menuYear + m.yearOffset,
                                      m.number
                                    ),
                                  });
                              }
                            } else {
                              setRangePending(true);
                              setEndLocked(false);
                              setStartMonth(m.number);
                              setStartYear(menuYear + m.yearOffset);
                              setEndYear(menuYear + m.yearOffset);
                              setEndMonth(m.number);
                              if (onStartMonthSelect)
                                onStartMonthSelect(
                                  new Date(menuYear + m.yearOffset, m.number)
                                );
                            }
                          }}
                          disabled={
                            (maxDate
                              ? menuYear + m.yearOffset >
                                  maxDate?.getFullYear() ||
                                (menuYear + m.yearOffset ==
                                  maxDate?.getFullYear() &&
                                  m.number > maxDate.getMonth())
                              : false) ||
                            (minDate
                              ? menuYear + m.yearOffset <
                                  minDate?.getFullYear() ||
                                (menuYear + m.yearOffset ==
                                  minDate?.getFullYear() &&
                                  m.number < minDate.getMonth())
                              : false)
                          }
                          className={cn(
                            buttonVariants({
                              variant:
                                (startMonth == m.number &&
                                  menuYear + m.yearOffset == startYear) ||
                                (endMonth == m.number &&
                                  menuYear + m.yearOffset == endYear &&
                                  !rangePending)
                                  ? (variant?.calendar?.selected ?? "default")
                                  : (variant?.calendar?.main ?? "ghost"),
                            }),
                            "h-full w-full p-0 font-normal not-xl:text-sm aria-selected:opacity-100"
                          )}
                        >
                          {callbacks?.monthLabel
                            ? callbacks.monthLabel(m)
                            : m.name}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

MonthRangeCalendar.displayName = "MonthRangeCalendar";

export { MonthRangeCalendar };
