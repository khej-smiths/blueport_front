import { Meta, StoryObj } from "@storybook/react";
import PopularPostItem from ".";

const meta: Meta<typeof PopularPostItem> = {
  title: "Components/Section/Landing/PopularPostItem",
  component: PopularPostItem,
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
type Story = StoryObj<typeof PopularPostItem>;

export const Default: Story = {};
