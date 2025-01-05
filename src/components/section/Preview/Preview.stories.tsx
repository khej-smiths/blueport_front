import { Meta, StoryObj } from "@storybook/react";
import Preview from ".";

const meta: Meta<typeof Preview> = {
  title: "Components/Section/Preview",
  component: Preview,
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
type Story = StoryObj<typeof Preview>;

const exampleDoc = `
안녕하세요

# 안녕하세요

## 안녕하세요

### 안녕하세요

#### 안녕하세요

**안녕하세요**

_안녕하세요_

~~안녕하세요~~

$$x - y + A$$

- 안녕하세요
- 안녕하세요
- 안녕하세요

1. 안녕하세요
2. 안녕하세요
3. 안녕하세요

> 안녕하세요 안녕하세요
안녕하세요

[안녕하세요](https://google.com)

![안녕하세요](https://i.redd.it/kv4glw0c6nwd1.png)

\`\`\`js
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
\`\`\`

\`console.log("hello world")\` 안녕하세요
안녕하세요 \`console.log("hello world")\`
`;

export const Default: Story = {
  args: {
    doc: exampleDoc,
  },
};
