import Link from "next/link";
import links from "@/data/links.json";

import styles from "@/styles/Nav.module.css";

export default function Nav(): JSX.Element {

  return (
    <nav className={styles.top_nav}>
      <ul className={styles.top_nav_ul}>
        <li>
          <Link className={styles.top_nav_link} href={links.posts.href} target={links.posts.target} rel={links.posts.rel}>
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.top_nav_link} href={links.projects.href} target={links.projects.target} rel={links.projects.rel}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
};