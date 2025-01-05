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
