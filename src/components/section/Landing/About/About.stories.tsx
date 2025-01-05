import { Meta, StoryObj } from "@storybook/react";
import About from ".";

const meta: Meta<typeof About> = {
  title: "Components/Section/Landing/About",
  component: About,
  decorators: [
    (Story) => (
      <div className="w-[1280px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {};
