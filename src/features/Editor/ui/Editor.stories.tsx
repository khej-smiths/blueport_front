import { Meta, StoryObj } from "@storybook/react";

import { Editor } from ".";

const meta: Meta<typeof Editor> = {
  title: "Components/Section/Editor",
  component: Editor,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Default: Story = {};
