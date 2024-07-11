// Test the MainNav component

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainNav from "./MainNav";
import { mainNavLinks } from "@/data/links";

describe("MainNav", () => {
  it("renders the main navigation", () => {
    render(<MainNav links={mainNavLinks} />);

    // for each link in the mainNavLinks array check that the link is rendered
    mainNavLinks.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.label });
      expect(linkElement).toBeInTheDocument();
    });
  });
});
