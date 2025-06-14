import { Meta, StoryObj } from "@storybook/react";

import { HorizontalPostCard } from ".";

const meta: Meta<typeof HorizontalPostCard> = {
  title: "Components/Section/PostCard/Horizontal",
  component: HorizontalPostCard,
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
type Story = StoryObj<typeof HorizontalPostCard>;

export const Default: Story = {};
