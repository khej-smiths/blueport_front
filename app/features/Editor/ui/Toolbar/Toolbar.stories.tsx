import { Meta, StoryObj } from "@storybook/react";

import { Toolbar } from ".";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Section/Editor/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {};
