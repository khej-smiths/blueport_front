import { Meta, StoryObj } from "@storybook/react";
import Horizontal from ".";

const meta: Meta<typeof Horizontal> = {
  title: "Components/Section/PostCard/Horizontal",
  component: Horizontal,
  decorators: [
    (Story) => (
      <div className="w-[780px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Horizontal>;

export const Default: Story = {};
