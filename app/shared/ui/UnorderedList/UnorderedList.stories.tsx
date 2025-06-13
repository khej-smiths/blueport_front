import { Meta, StoryObj } from "@storybook/react";

import { useProcessor } from "../../hooks/useProcessor";
import { UnorderedList } from ".";

const UnorderedListWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <UnorderedList>{Content}</UnorderedList>;
};

const meta: Meta<typeof UnorderedListWithProcessor> = {
  title: "Components/Section/Preview/UnorderedList",
  component: UnorderedListWithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UnorderedListWithProcessor>;

export const Default: Story = {
  args: {
    children: `
- 첫 번째 항목
- 두 번째 항목
- 세 번째 항목`,
  },
};
