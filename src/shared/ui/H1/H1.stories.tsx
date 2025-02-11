import { Meta, StoryObj } from "@storybook/react";
import { H1 } from ".";
import { useProcessor } from "../../hooks/useProcessor";

const H1WithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <H1>{Content}</H1>;
};

const meta: Meta<typeof H1WithProcessor> = {
  title: "Components/Section/Preview/H1",
  component: H1WithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof H1WithProcessor>;

export const Default: Story = {
  args: {
    children: "# 제목 1",
  },
};
