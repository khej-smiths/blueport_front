import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof Input> = {
  title: "Components/Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "입력 필드의 플레이스홀더 텍스트",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "입력 필드의 타입",
    },
    disabled: {
      control: "boolean",
      description: "입력 필드의 비활성 상태",
    }
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "무엇이든 입력해보세요!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    // 입력 테스트
    await userEvent.type(input, "안녕하세요");
    await expect(input).toHaveValue("안녕하세요");
  },
};
