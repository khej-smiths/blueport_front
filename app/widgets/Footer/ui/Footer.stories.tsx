import { Meta } from "@storybook/react";

import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "Components/Section/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="flex min-h-dvh flex-col-reverse">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
export const Default = () => <Footer />;
