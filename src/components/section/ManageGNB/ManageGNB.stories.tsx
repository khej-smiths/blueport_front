import type { Meta, StoryObj } from "@storybook/react";
import ManageGNB from ".";

const meta: Meta<typeof ManageGNB> = {
  title: "Components/Section/ManageGNB",
  component: ManageGNB,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ManageGNB>;

export const Default: Story = {};
