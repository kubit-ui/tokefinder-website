import { render } from "@testing-library/react";
import FloatingBubbles from "../bubbles";
import { describe, expect, it } from "vitest";

describe("FloatingBubbles", () => {
  it("renders correctly", () => {
    const { container } = render(<FloatingBubbles />);
    expect(container).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const { container } = render(<FloatingBubbles />);
    expect(container).not.toBeNull();
  });
});
