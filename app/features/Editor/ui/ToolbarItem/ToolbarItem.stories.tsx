import { Meta, StoryObj } from "@storybook/react";
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdImage,
  MdInsertLink,
} from "react-icons/md";

import { Heading } from "../Toolbar/Heading";
import { ToolbarItem } from ".";

const iconMap = {
  heading1: <Heading level="1" />,
  heading2: <Heading level="2" />,
  heading3: <Heading level="3" />,
  heading4: <Heading level="4" />,
  bold: <MdFormatBold />,
  italic: <MdFormatItalic />,
  strike: <MdFormatStrikethrough />,
  quote: <MdFormatQuote />,
  link: <MdInsertLink />,
  image: <MdImage />,
  codeblock: <MdCode />,
};

const meta: Meta<typeof ToolbarItem> = {
  title: "Components/Section/Editor/ToolbarItem",
  component: ToolbarItem,
  parameters: {
    layout: "centered",
  },
  args: {
    icon: iconMap.bold,
  },
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
      mapping: iconMap,
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToolbarItem>;

export const Default: Story = {};
