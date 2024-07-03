import Link from "next/link";
import links from "@/data/links.json";

export default function MainNav(): JSX.Element {
  return (
    <nav className="w-full flex items-center justify-end">
      <ul className="flex">
        <li>
          <Link
            className="m-1 md:m-3 no-underline text-white text-xl"
            href={links.posts.href}
            target={links.posts.target}
            rel={links.posts.rel}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="m-1 md:m-3 no-underline text-white text-xl"
            href={links.projects.href}
            target={links.projects.target}
            rel={links.projects.rel}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}