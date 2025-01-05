import { Meta, StoryObj } from "@storybook/react";
import Intro from ".";

const meta: Meta<typeof Intro> = {
  title: "Components/Section/Landing/Intro",
  component: Intro,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Intro>;

export const Default: Story = {};
