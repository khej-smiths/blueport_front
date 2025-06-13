import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Components/Common/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
