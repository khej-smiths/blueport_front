import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { MonthRangeCalendar } from ".";

const meta: Meta<typeof MonthRangeCalendar> = {
  title: "Components/Common/MonthRangeCalendar",
  component: MonthRangeCalendar,
  parameters: { layout: "centered" },
};

export default meta;
export type Story = StoryObj<typeof MonthRangeCalendar>;

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>();
    return (
      <MonthRangeCalendar
        onMonthRangeSelect={setRange as any}
        selectedMonthRange={range}
      />
    );
  },
};
