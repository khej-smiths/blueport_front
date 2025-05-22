import { Meta, StoryObj } from "@storybook/react";

import { useProcessor } from "../../hooks/useProcessor";
import { H3 } from ".";

const H3WithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <H3>{Content}</H3>;
};

const meta: Meta<typeof H3WithProcessor> = {
  title: "Components/Section/Preview/H3",
  component: H3WithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof H3WithProcessor>;

export const Default: Story = {
  args: {
    children: "### 제목 3",
  },
};
