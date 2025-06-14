import { Meta, StoryObj } from "@storybook/react";

import { Category } from ".";

const meta = {
  title: "Components/Common/Category",
  component: Category,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    category: {
      control: "text",
      description: "카테고리 이름",
    },
    total: {
      control: "number",
      description: "게시글 총 개수",
    },
  },
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    category: "Category",
    total: 12,
  },
};
