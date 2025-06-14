import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroup, ToggleGroupItem } from ".";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Common/ToggleGroup",
  component: ToggleGroup,
  parameters: { layout: "centered" },
};

export default meta;
export type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem value="1">하나</ToggleGroupItem>
      <ToggleGroupItem value="2">둘</ToggleGroupItem>
    </ToggleGroup>
  ),
};
