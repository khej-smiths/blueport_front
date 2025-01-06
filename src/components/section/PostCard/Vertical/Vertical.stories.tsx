import { Meta, StoryObj } from "@storybook/react";
import Vertical from ".";

const meta: Meta<typeof Vertical> = {
  title: "Components/Section/PostCard/Vertical",
  component: Vertical,
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Vertical>;

export const Default: Story = {};
