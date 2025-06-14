import { Meta, StoryObj } from "@storybook/react";

import { Loading } from ".";

const meta: Meta<typeof Loading> = {
  title: "Components/Common/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
