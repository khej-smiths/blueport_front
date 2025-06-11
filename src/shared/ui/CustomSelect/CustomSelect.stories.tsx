import type { Meta, StoryObj } from "@storybook/react";

import { CustomSelect } from ".";

const meta: Meta<typeof CustomSelect> = {
  title: "Components/Common/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    selectOptions: [
      { label: "옵션1", value: "option1" },
      { label: "옵션2", value: "option2" },
    ],
    placeholder: "선택해 주세요",
  },
};

export default meta;
export type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {};
