import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from ".";

const meta: Meta<typeof Popover> = {
  title: "Components/Common/Popover",
  component: Popover,
  parameters: { layout: "centered" },
};

export default meta;
export type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>열기</Button>
      </PopoverTrigger>
      <PopoverContent>팝오버 내용</PopoverContent>
    </Popover>
  ),
};
