import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from ".";

const meta: Meta<typeof Toggle> = {
  title: "Components/Common/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  args: {
    children: "토글",
  },
};

export default meta;
export type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
