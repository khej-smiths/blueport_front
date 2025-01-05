import { Meta, StoryObj } from "@storybook/react";
import Hyperlink from ".";
import useProcessor from "@/hooks/useProcessor";

const HyperlinkWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <Hyperlink href="https://google.com">{Content}</Hyperlink>;
};

const meta: Meta<typeof HyperlinkWithProcessor> = {
  title: "Components/Section/Preview/Hyperlink",
  component: HyperlinkWithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HyperlinkWithProcessor>;

export const Default: Story = {
  args: {
    children: "[링크 텍스트](https://example.com)",
  },
};
