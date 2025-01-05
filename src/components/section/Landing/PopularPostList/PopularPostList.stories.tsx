import { Meta, StoryObj } from "@storybook/react";
import PopularPostList from ".";

const meta: Meta<typeof PopularPostList> = {
  title: "Components/Section/Landing/PopularPostList",
  component: PopularPostList,
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
type Story = StoryObj<typeof PopularPostList>;

export const Default: Story = {};
