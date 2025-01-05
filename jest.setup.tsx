import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        src={props.src || ""}
        alt={props.alt || ""}
        data-testid={props["data-testid"]} // for testing
      />
    );
  },
}));

// unified와 관련 패키지들을 모킹
jest.mock("unified", () => ({
  __esModule: true,
  unified: jest.fn().mockReturnThis(),
  default: jest.fn().mockReturnThis(),
}));

jest.mock("remark-parse", () => ({
  __esModule: true,
  default: jest.fn().mockReturnThis(),
}));

jest.mock("remark-rehype", () => ({
  __esModule: true,
  default: jest.fn().mockReturnThis(),
}));

// CodeMirror 관련 모듈 모킹
jest.mock("@codemirror/state", () => ({
  __esModule: true,
  EditorState: {
    create: jest.fn((config) => ({
      doc: config?.doc || "",
      selection: { main: { head: 0, anchor: 0 } },
    })),
  },
  EditorSelection: {
    range: jest.fn().mockReturnValue({ from: 2, to: 5 }),
    cursor: jest.fn().mockReturnValue({ from: 0, to: 0 }),
    single: jest.fn().mockReturnValue({ from: 0, to: 0 }),
  },
  Text: {
    of: jest.fn((lines) => lines.join("\n")),
  },
}));

jest.mock("@codemirror/view", () => {
  const updateListenerCallback = jest.fn();
  return {
    __esModule: true,
    EditorView: class {
      state = {
        doc: {
          sliceString: jest.fn().mockReturnValue("텍스트"),
          lineAt: jest.fn().mockReturnValue({ from: 0, to: 0, text: "" }),
        },
        selection: {
          main: { from: 0, to: 0 },
          ranges: [{ from: 0, to: 0 }],
        },
      };
      dispatch = jest.fn();
      focus = jest.fn();
      constructor() {}
      destroy() {}
      static updateListener = {
        of: jest.fn((callback) => {
          updateListenerCallback(callback);
          return { updateListener: callback };
        }),
      };
      static lineWrapping = {};
      static theme = jest.fn().mockReturnValue({});
    },
    keymap: { of: jest.fn() },
    placeholder: jest.fn(),
  };
});

jest.mock("@codemirror/commands", () => ({
  __esModule: true,
  defaultKeymap: [],
  history: jest.fn(),
  historyKeymap: [],
  indentWithTab: jest.fn(),
}));

jest.mock("@codemirror/language", () => ({
  __esModule: true,
  indentOnInput: jest.fn(),
  syntaxHighlighting: jest.fn(),
  defaultHighlightStyle: {},
  HighlightStyle: {
    define: jest.fn().mockReturnValue({
      style: {},
    }),
  },
  tags: {
    heading1: {},
    heading2: {},
    heading3: {},
    heading4: {},
    heading5: {},
    heading6: {},
    strong: {},
    emphasis: {},
    link: {},
    list: {},
    listMark: {},
    quote: {},
    quoteMarker: {},
    code: {},
    blockquote: {},
    orderedList: {},
    unorderedList: {},
    // 필요한 다른 태그들도 추가할 수 있습니다
  },
}));

jest.mock("@codemirror/language-data", () => ({
  __esModule: true,
  languages: [],
}));

jest.mock("@codemirror/lang-markdown", () => ({
  __esModule: true,
  markdown: jest.fn(),
  markdownLanguage: {},
}));
