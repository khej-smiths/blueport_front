import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import MonthCalendar from ".";

const meta: Meta<typeof MonthCalendar> = {
  title: "Components/Common/MonthCalendar",
  component: MonthCalendar,
  parameters: { layout: "centered" },
};

export default meta;
export type Story = StoryObj<typeof MonthCalendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState(new Date());
    return <MonthCalendar select={date} onSelect={setDate} />;
  },
};
