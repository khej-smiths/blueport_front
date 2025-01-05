import { Meta, StoryObj } from "@storybook/react";
import H4 from ".";
import useProcessor from "@/hooks/useProcessor";

const H4WithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <H4>{Content}</H4>;
};

const meta: Meta<typeof H4WithProcessor> = {
  title: "Components/Section/Preview/H4",
  component: H4WithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof H4WithProcessor>;

export const Default: Story = {
  args: {
    children: "#### 제목 4",
  },
};
