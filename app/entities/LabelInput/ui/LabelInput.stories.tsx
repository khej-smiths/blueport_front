import { Meta, StoryObj } from "@storybook/react";

import { LabelInput } from ".";

const meta: Meta<typeof LabelInput> = {
  title: "Components/Common/LabelInput",
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story placeholder="LabelInput 테스트" />
      </div>
    ),
  ],
  component: LabelInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "라벨 텍스트",
    },
    required: {
      control: "boolean",
      description: "필수 여부",
    },
    labelStyle: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelInput>;

export const Default: Story = {
  args: {
    children: "Input 라벨",
  },
};
