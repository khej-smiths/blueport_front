import { Meta, StoryObj } from "@storybook/react";

import { RecentPostList } from ".";

const meta: Meta<typeof RecentPostList> = {
  title: "Components/Section/Landing/RecentPostList",
  component: RecentPostList,
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
type Story = StoryObj<typeof RecentPostList>;

export const Default: Story = {};
