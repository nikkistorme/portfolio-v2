import Link from "next/link";

import Image from "next/image";
import { EmailIcon } from "../Icons";

export default function Socials({ links }: { links: Link[] }): React.JSX.Element {

  const linkImages: { [key: string]: React.JSX.Element } = {
    "email": (<EmailIcon className="size-8" />),
    "linkedin": (<Image fill={true} src="/linkedin-icon-white.png" alt="" />),
    "github": (<Image fill={true} src="/github-icon-white.svg" alt="" />)
  }

  return (
    <ul className="flex gap-5 opacity-90">
      {links?.map((link: Link, idx: number) => (
        <li key={idx}>
          <Link
            className="relative flex items-center size-8"
            href={link.href}
            target={link.target}
            rel={link.rel}
            aria-label={link.label}
          >
            {linkImages[link.label.toLowerCase()]}
          </Link>
        </li>
      ))}
    </ul>
  )
}