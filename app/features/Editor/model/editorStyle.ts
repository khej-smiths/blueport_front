import { HighlightStyle } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

// One Light Theme
const base = "#fafafa",
  mono1 = "#383a42",
  mono2 = "#686b77",
  mono3 = "#a0a1a7",
  hue1 = "#0184bb",
  hue2 = "#4078f2",
  hue3 = "#a626a4",
  hue4 = "#50a14f",
  // hue5 = "#e45649",
  hue52 = "#c91243",
  hue6 = "#986801",
  hue62 = "#c18401";

export const customHighlightStyle = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  {
    tag: tags.heading2,
    fontSize: "2rem",
    fontWeight: 700,
  },
  { tag: tags.heading3, fontSize: "1.5rem", fontWeight: 700 },
  { tag: tags.heading4, fontSize: "1.313rem", fontWeight: 700 },
  {
    tag: tags.strong,
    fontSize: "1.125rem",
    fontWeight: 700,
  },
  {
    tag: tags.emphasis,
    fontSize: "1.125rem",
    fontStyle: "italic",
  },
  {
    tag: tags.strikethrough,
    fontSize: "1.125rem",
    textDecoration: "line-through",
  },
  { tag: tags.keyword, color: hue3, fontSize: "1.125rem" },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.propertyName,
      tags.macroName,
    ],
    color: hue52,
    fontSize: "1.125rem",
  },
  {
    tag: [tags.function(tags.variableName), tags.labelName],
    color: hue2,
    fontSize: "1.125rem",
  },
  {
    tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
    color: hue6,
    fontSize: "1.125rem",
  },
  {
    tag: [tags.definition(tags.name), tags.separator],
    color: hue6,
    fontSize: "1.125rem",
  },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.modifier,
      tags.self,
      tags.namespace,
    ],
    color: hue62,
    fontSize: "1.125rem",
  },
  {
    tag: [
      tags.operator,
      tags.operatorKeyword,
      tags.url,
      tags.escape,
      tags.regexp,
      tags.link,
      tags.special(tags.string),
    ],
    color: hue1,
    fontSize: "1.125rem",
  },
  {
    tag: [tags.meta, tags.comment],
    color: mono1,
  },
  { tag: tags.strong, fontWeight: "bold", fontSize: "1.125rem" },
  { tag: tags.emphasis, fontStyle: "italic", fontSize: "1.125rem" },
  {
    tag: tags.link,
    color: hue2,
    textDecoration: "underline",
    fontSize: "1.125rem",
  },
  { tag: tags.heading, fontWeight: "bold", color: hue52, fontSize: "1.125rem" },
  {
    tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
    color: hue2,
    fontSize: "1.125rem",
  },
  {
    tag: [tags.string, tags.inserted],
    color: hue4,
    fontSize: "1.125rem",
  },
  { tag: tags.invalid, color: mono3, fontSize: "1.125rem" },
]);

export const transparentTheme = EditorView.theme({
  "&": {
    height: "100%",
    color: "#212529",
    fontSize: "1.125rem",
    borderRadius: "1rem",
  },
  "&.cm-focused": {
    outline: "none",
  },
  "&.cm-placeholder": {
    fontSize: "1.125rem",
  },

  ".cm-content": {
    padding: "0rem",
    caretColor: hue2,
  },

  ".cm-hue2, .cm-drophue2": { borderLeftColor: hue2 },
  "&.cm-focused > .cm-scroller > .cm-mono3Layer .cm-mono3base, .cm-mono3base, .cm-content ::mono3":
    { baseColor: mono3 },

  ".cm-panels": { baseColor: mono2, color: base },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

  ".cm-searchMatch": {
    baseColor: "#72a1ff59",
    outline: "1px solid #457dff",
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    baseColor: "#6199ff2f",
  },

  ".cm-activeLine": { baseColor: "#6699ff0b" },
  ".cm-mono3Match": { baseColor: "#aafe661a" },

  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    baseColor: "#bad0f847",
  },

  ".cm-gutters": {
    baseColor: base,
    color: mono1,
    border: "none",
  },

  ".cm-activeLineGutter": {
    baseColor: mono3,
  },

  ".cm-foldPlaceholder": {
    baseColor: "transparent",
    border: "none",
    color: "#ddd",
  },

  ".cm-tooltip": {
    border: "none",
    baseColor: mono1,
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: mono1,
    borderBottomColor: mono1,
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      baseColor: mono3,
      color: mono3,
    },
  },
});
