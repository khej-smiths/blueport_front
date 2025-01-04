import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

/**
 * `Button` 컴포넌트는 다양한 스타일과 크기를 지원하는 기본적인 버튼 요소입니다.
 */
const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "애플리케이션 전반에 걸쳐 사용되는 기본 버튼 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "ghost", "link"],
      description: "버튼의 스타일 변형",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "버튼의 크기",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "버튼의 내용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};
