import { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";

import { Button } from "../Button";
import { Toaster } from ".";

const meta: Meta<typeof Toaster> = {
  title: "Components/Common/Toaster",
  component: Toaster,
  decorators: [
    (Story) => (
      <div className="flex gap-5">
        <Button onClick={() => toast("Hello World!")}>Default</Button>
        <Button
          onClick={() =>
            toast.message("Hello World!", {
              description: "이것이 토스트 설명입니다 알아들으셨습니까?",
            })
          }
        >
          Description
        </Button>
        <Button onClick={() => toast.success("Hello World!")}>Success</Button>
        <Button onClick={() => toast.info("Hello World!")}>Info</Button>
        <Button onClick={() => toast.warning("Hello World!")}>Warning</Button>
        <Button onClick={() => toast.error("Hello World!")}>Error</Button>
        <Button
          onClick={() =>
            toast("Hello World!", {
              action: {
                label: "button",
                onClick: () => alert("Hello!!"),
              },
            })
          }
        >
          Action
        </Button>
        <Button
          onClick={() =>
            toast.promise(
              () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "Sonner" }), 2000)
                ),
              {
                loading: "Loading...",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                success: (data: any) => {
                  return `${data.name} 테스트 완료!`;
                },
                error: "Error",
              }
            )
          }
        >
          Promise
        </Button>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: "select",
      defaultValue: "light",
      options: ["light", "dark", "system"],
    },
    position: {
      control: "select",
      defaultValue: "bottom-right",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
    expand: {
      control: "boolean",
      defaultValue: false,
    },
    closeButton: {
      control: "boolean",
      defaultValue: false,
    },
    richColors: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {};
