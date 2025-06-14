import { Meta, StoryObj } from "@storybook/react";

import { LandingIntro } from ".";

const meta: Meta<typeof LandingIntro> = {
  title: "Components/Section/Landing/LandingIntro",
  component: LandingIntro,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LandingIntro>;

export const Default: Story = {};
