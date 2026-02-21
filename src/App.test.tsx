import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App integration", () => {
  it("renders the app and generates a sentence on click", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /generate/i });

    await userEvent.click(button);

    // there should now be at least one sentence
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBeGreaterThan(0);

    const text = headings[headings.length - 1].textContent || "";
    // ensure sentence is non-empty
    expect(text.length).toBeGreaterThan(0);
  });

  it("adds another sentence on second click", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /generate/i });

    await userEvent.click(button);
    await userEvent.click(button);

    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBe(2);

    headings.forEach((h) => {
      const text = h.textContent || "";
      expect(text.length).toBeGreaterThan(0);
    });
  });
});
