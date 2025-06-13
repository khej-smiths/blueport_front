import { Meta, StoryObj } from "@storybook/react";

import { LandingAbout } from ".";

const meta: Meta<typeof LandingAbout> = {
  title: "Components/Section/Landing/LandingAbout",
  component: LandingAbout,
  decorators: [
    (Story) => (
      <div className="w-[1280px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LandingAbout>;

export const Default: Story = {};
