import type { Meta, StoryObj } from "@storybook/react";

import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Components/Common/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "라벨",
  },
};

export default meta;
export type Story = StoryObj<typeof Label>;

export const Default: Story = {};
