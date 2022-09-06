import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { WrappedApp, App } from "../App";

describe("App", () => {
  it("Renders hello world", () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Manoel Vitor Nascimento Lopes");
  });

  it("Renders page not found", () => {
    render(
      <MemoryRouter initialEntries={["/badroute"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("PAGE NOT FOUND.");
  });
});
