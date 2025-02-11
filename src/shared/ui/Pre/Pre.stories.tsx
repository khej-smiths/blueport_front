import { Meta, StoryObj } from "@storybook/react";
import { Pre } from ".";
import { useProcessor } from "../../hooks/useProcessor";

const PreWithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <Pre>{Content}</Pre>;
};

const meta: Meta<typeof PreWithProcessor> = {
  title: "Components/Section/Preview/Pre",
  component: PreWithProcessor,
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PreWithProcessor>;

export const Default: Story = {
  args: {
    children: `\`\`\`js
console.log("test")

function Test(arg) {
  const test = 19824
  const boolean = false

  if (arg === test){
    return boolean
  }

// 안녕하세요
}
\`\`\`

\`\`\`python
print("안녕하세요")

def Test(arg):
  test = 1902
  str(test)
  boolean = True

  if test == arg:
    return False

  return boolean

# 안녕하세요
\`\`\``,
  },
};
