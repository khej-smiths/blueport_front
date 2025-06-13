import type { Meta, StoryObj } from "@storybook/react";

import { FormLabel } from ".";

const meta: Meta<typeof FormLabel> = {
  title: "Components/Common/FormLabel",
  component: FormLabel,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "라벨",
    required: true,
  },
};

export default meta;
export type Story = StoryObj<typeof FormLabel>;

export const Default: Story = {};
