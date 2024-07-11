import { mainNavLinks, socialLinks } from "@/data/links";
import MainNav from "../MainNav/MainNav";
import Socials from "../Socials/Socials";

export default function Header(): JSX.Element {

  return (
    <header
      className="py-6 shadow-xl bg-background"
    >
      <div className="flex items-center w-full h-full max-w-screen-xl px-5 mx-auto">
        <Socials links={socialLinks} />
        <MainNav links={mainNavLinks} />
      </div>
    </header>
  );
}