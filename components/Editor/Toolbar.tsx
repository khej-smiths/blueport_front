import { EditorView } from "@codemirror/view";
import ToolbarItem from "./ToolbarItem";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdInsertLink,
  MdFormatQuote,
  MdImage,
  MdCode,
} from "react-icons/md";

interface Props {
  editorView: EditorView | undefined;
}

function Heading({ level }: { level: string }) {
  return (
    <div className="text-[1rem] font-bold font-[serif]">
      H<span className="text-[0.75rem]">{level}</span>
    </div>
  );
}

function Separator() {
  return <div className="w-[1px] h-[1.25rem] mx-2 bg-[#dee2e6]" />;
}

export default function Toolbar({ editorView }: Props) {
  return (
    <div className="flex w-full flex-wrap items-center">
      <ToolbarItem
        icon={<Heading level={"1"} />}
        onClick={() => console.log("H1")}
      />
      <ToolbarItem icon={<Heading level={"2"} />} />
      <ToolbarItem icon={<Heading level={"3"} />} />
      <ToolbarItem icon={<Heading level={"4"} />} />
      <Separator />
      <ToolbarItem icon={<MdFormatBold />} />
      <ToolbarItem icon={<MdFormatItalic />} />
      <ToolbarItem icon={<MdFormatStrikethrough />} />
      <Separator />
      <ToolbarItem icon={<MdFormatQuote />} />
      <ToolbarItem icon={<MdInsertLink />} />
      <ToolbarItem icon={<MdImage />} />
      <ToolbarItem icon={<MdCode />} />
    </div>
  );
}
