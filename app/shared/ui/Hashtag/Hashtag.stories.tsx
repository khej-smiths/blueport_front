import { Meta, StoryObj } from "@storybook/react";

import { Hashtag } from ".";

const meta = {
  title: "Components/Common/Hashtag",
  component: Hashtag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hashtag: {
      control: "text",
      description: "해시테그 이름",
    },
    total: {
      control: "number",
      description: "게시글 총 개수",
    },
  },
} satisfies Meta<typeof Hashtag>;

export default meta;
type Story = StoryObj<typeof Hashtag>;

export const Default: Story = {
  args: {
    hashtag: "Hashtag",
    total: 12,
  },
};
