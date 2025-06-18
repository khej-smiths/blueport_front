import { Heading as MdastHeading, PhrasingContent } from "mdast";

export interface Heading {
  text: string;
  level: number;
  id: string;
}

export interface HeadingNode extends MdastHeading {
  type: "heading";
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  children: PhrasingContent[];
}