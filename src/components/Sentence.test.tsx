import { render } from "@testing-library/react";
import Sentence from "./Sentence";

const mockEntry = {
  personality: "brave",
  character: "knight",
  clothing: "armor",
  verb: "holding",
  item: "sword"
};

describe("Sentence component", () => {
  it("renders all parts of the sentence correctly", () => {
    const { container } = render(<Sentence entry={mockEntry} />);

    // use container.textContent to match all text even if split by spans
    const text = container.textContent || "";

    expect(text).toContain("brave");
    expect(text).toContain("knight");
    expect(text).toContain("armor");
    expect(text).toContain("holding");
    expect(text).toContain("sword");

    // check that the spans for highlighted words exist
    const spans = container.querySelectorAll("span#imp");
    expect(spans).toHaveLength(3);
    expect(spans[0].textContent).toBe("knight");
    expect(spans[1].textContent).toBe("armor");
    expect(spans[2].textContent).toBe("sword");
  });
});
