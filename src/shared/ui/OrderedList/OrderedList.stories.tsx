import { Meta, StoryObj } from "@storybook/react";
import { OrderedList } from ".";
import { useProcessor } from "../../hooks/useProcessor";

const OrderedListWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <OrderedList>{Content}</OrderedList>;
};

const meta: Meta<typeof OrderedListWithProcessor> = {
  title: "Components/Section/Preview/OrderedList",
  component: OrderedListWithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof OrderedListWithProcessor>;

export const Default: Story = {
  args: {
    children: `
1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목`,
  },
};
