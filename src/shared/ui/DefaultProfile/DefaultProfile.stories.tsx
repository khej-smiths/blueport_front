import type { Meta, StoryObj } from "@storybook/react";

import { DefaultProfile } from ".";

const meta: Meta<typeof DefaultProfile> = {
  title: "Components/Common/DefaultProfile",
  component: DefaultProfile,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
  },
};

export default meta;
export type Story = StoryObj<typeof DefaultProfile>;

export const Default: Story = {};
