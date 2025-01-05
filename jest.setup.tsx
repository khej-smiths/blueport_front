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
