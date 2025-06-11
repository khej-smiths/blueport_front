import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Common/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
export type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker date={date} setDate={setDate} />;
  },
};
