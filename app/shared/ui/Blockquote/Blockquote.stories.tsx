import { Meta, StoryObj } from "@storybook/react";

import { useProcessor } from "../../hooks/useProcessor";
import { Blockquote } from ".";

const BlockquoteWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <Blockquote>{Content}</Blockquote>;
};

const meta: Meta<typeof BlockquoteWithProcessor> = {
  title: "Components/Section/Preview/Blockquote",
  component: BlockquoteWithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BlockquoteWithProcessor>;

export const Default: Story = {
  args: {
    children: "이것은 인용문입니다.",
  },
};
