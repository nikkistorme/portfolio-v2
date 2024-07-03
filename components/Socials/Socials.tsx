import Link from "next/link";

import links from "@/data/links.json";
import Image from "next/image";
import { EmailIcon } from "../Icons";

export default function Socials(): JSX.Element {
  return (
    <ul className="flex gap-5 opacity-90">
      <li>
        <Link
          className="flex items-center"
          href={links.email.href}
          target={links.email.target}
          rel={links.email.rel}
          aria-label={'Send Nikki an email'}
        >
          <EmailIcon className="size-8" />
        </Link>
      </li>
      <li>
        <Link
          className="relative flex items-center size-8"
          href={links.linkedin.href}
          target={links.linkedin.target}
          rel={links.linkedin.rel}
          aria-label={'Connect with Nikki on LinkedIn'}
        >
          <Image fill={true} src="/linkedin-icon-white.png" alt="" />
        </Link>
      </li>
      <li>
        <Link
          className="relative flex items-center size-8"
          href={links.github.href}
          target={links.github.target}
          rel={links.github.rel}
          aria-label={'View Nikki\'s GitHub profile'}
        >
          <Image fill={true} src="/github-icon-white.svg" alt="" />
        </Link>
      </li>
    </ul>
  )
}