import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Usecase/Login/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
