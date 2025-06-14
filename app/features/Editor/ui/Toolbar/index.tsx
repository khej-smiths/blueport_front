import { EditorView } from "@codemirror/view";
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdImage,
  MdInsertLink,
} from "react-icons/md";

import { useToolbar } from "../../model/useToolbar";
import { ToolbarItem } from "../ToolbarItem";
import { Heading } from "./Heading";
import { Separator } from "./Separator";

interface Props {
  editorView: EditorView | undefined;
}

export function Toolbar({ editorView }: Props) {
  const { handleItemClick } = useToolbar({ editorView });

  return (
    <div
      id="editor_toolbar"
      className="sticky top-0 flex w-full flex-wrap items-center"
    >
      <ToolbarItem
        icon={<Heading level={"1"} />}
        onClick={() => handleItemClick("heading1")}
      />
      <ToolbarItem
        icon={<Heading level={"2"} />}
        onClick={() => handleItemClick("heading2")}
      />
      <ToolbarItem
        icon={<Heading level={"3"} />}
        onClick={() => handleItemClick("heading3")}
      />
      <ToolbarItem
        icon={<Heading level={"4"} />}
        onClick={() => handleItemClick("heading4")}
      />
      <Separator />
      <ToolbarItem
        icon={<MdFormatBold data-testid="format-bold" />}
        onClick={() => handleItemClick("bold")}
      />
      <ToolbarItem
        icon={<MdFormatItalic data-testid="format-italic" />}
        onClick={() => handleItemClick("italic")}
      />
      <ToolbarItem
        icon={<MdFormatStrikethrough data-testid="format-strikethrough" />}
        onClick={() => handleItemClick("strike")}
      />
      <Separator />
      <ToolbarItem
        icon={<MdFormatQuote data-testid="format-quote" />}
        onClick={() => handleItemClick("quote")}
      />
      <ToolbarItem
        icon={<MdInsertLink data-testid="format-link" />}
        onClick={() => handleItemClick("link")}
      />
      <ToolbarItem
        icon={<MdImage data-testid="format-image" />}
        onClick={() => handleItemClick("image")}
      />
      <ToolbarItem
        icon={<MdCode data-testid="format-codeblock" />}
        onClick={() => handleItemClick("codeblock")}
      />
    </div>
  );
}
