import { Meta, StoryObj } from "@storybook/react";

import { EXAMPLE_DOC } from "@/shared";

import { Preview } from ".";

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

export const Default: Story = {
  args: {
    doc: EXAMPLE_DOC,
  },
};
