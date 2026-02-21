import { render } from "@testing-library/react";
import History from "./History";

const mockHistory = [
  { personality: "brave", character: "knight", clothing: "armor", verb: "holding", item: "sword" },
  { personality: "evil", character: "wizard", clothing: "robes", verb: "holding", item: "staff" },
  { personality: "funny", character: "clown", clothing: "costume", verb: "holding", item: "balloon" }
];

describe("History component", () => {
  it("renders only the last two entries", () => {
    const { container } = render(<History history={mockHistory} />);

    const text = container.textContent || "";

    // First entry should not appear
    expect(text).not.toContain("brave");
    expect(text).toContain("evil");
    expect(text).toContain("wizard");
    expect(text).toContain("funny");
    expect(text).toContain("clown");

    // Check highlighted spans
    const spans = container.querySelectorAll("span#imp");
    expect(spans.length).toBe(6); // 3 words each for last two entries
  });
});
