import { Meta, StoryObj } from "@storybook/react";

import { Profile } from ".";

const meta: Meta<typeof Profile> = {
  title: "Components/Section/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {};
