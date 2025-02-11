import { Meta, StoryObj } from "@storybook/react";
import { VerticalPostCard } from ".";

const meta: Meta<typeof VerticalPostCard> = {
  title: "Components/Section/PostCard/Vertical",
  component: VerticalPostCard,
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
type Story = StoryObj<typeof VerticalPostCard>;

export const Default: Story = {};
