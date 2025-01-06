import { Meta, StoryObj } from "@storybook/react";
import GNB from ".";

const meta: Meta<typeof GNB> = {
  title: "Components/Section/GNB",
  component: GNB,
  decorators: [
    (Story) => (
      <div className="w-dvw">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof GNB>;

export const Default: Story = {};
