import { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from ".";

const meta: Meta<typeof SectionTitle> = {
  title: "Components/Common/SectionTItle",
  component: SectionTitle,
  decorators: [
    (Story) => (
      <div className="w-[1024px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: "섹션 제목",
  },
};
