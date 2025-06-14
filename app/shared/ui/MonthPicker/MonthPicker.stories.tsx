import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { MonthPicker } from ".";

const meta: Meta<typeof MonthPicker> = {
  title: "Components/Common/MonthPicker",
  component: MonthPicker,
  parameters: { layout: "centered" },
};

export default meta;
export type Story = StoryObj<typeof MonthPicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <MonthPicker date={date} setDate={setDate} />;
  },
};
