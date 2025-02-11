import { Meta, StoryObj } from "@storybook/react";
import { Code } from ".";
import { useProcessor } from "../../hooks/useProcessor";

const CodeWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return (
    <div className="[&_code]:inline-block [&_code]:leading-none [&_p]:m-0">
      <Code>{Content}</Code>
    </div>
  );
};

const meta: Meta<typeof CodeWithProcessor> = {
  title: "Components/Section/Preview/Code",
  component: CodeWithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CodeWithProcessor>;

export const Default: Story = {
  args: {
    children: `\`console.log('Hello World')\``,
  },
};
