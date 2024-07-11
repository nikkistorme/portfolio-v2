// Test the Socials component

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Socials from "./Socials";
import { socialLinks } from "@/data/links";

describe("Socials", () => {
  it("renders the social links", () => {
    render(<Socials links={socialLinks} />);

    // for each link in the socialLinks array check that the link is rendered
    socialLinks.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.label });
      expect(linkElement).toBeInTheDocument();
    });
  });
});