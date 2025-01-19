import { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./index";

const meta: Meta<typeof FileUpload> = {
  title: "Components/Common/FileUpload",
  decorators: [
    (Story) => (
      <div className="h-[164px] w-[590px]">
        <Story />
      </div>
    ),
  ],
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof FileUpload> = {};
