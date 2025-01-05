import { Meta, StoryObj } from "@storybook/react";
import RecentPostItem from ".";

const meta: Meta<typeof RecentPostItem> = {
  title: "Components/Section/Landing/RecentPostItem",
  component: RecentPostItem,
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
type Story = StoryObj<typeof RecentPostItem>;

export const Default: Story = {};
