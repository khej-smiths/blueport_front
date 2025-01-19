import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Components/Common/Textarea",
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: {},
};
