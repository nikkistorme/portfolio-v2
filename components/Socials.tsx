import { useState, useLayoutEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

import links from '@/data/links.json';

import styles from '@/styles/Socials.module.css';

export default function Socials() {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  return (
    <div>
      <ul className={styles.socials_list}>
        <li>
          <Link className={styles.social_link} href={links.email.href} target={links.email.target} rel={links.email.rel}>
            <Image src="/email-icon-white.svg" alt="Send Nikki an email" width={width < 768 ? 25 : 30} height={width < 768 ? 25 : 30} />
          </Link>
        </li>
        <li>
          <Link className={styles.social_link} href={links.linkedin.href} target={links.linkedin.target} rel={links.linkedin.rel}>
            <Image src="/linkedin-icon-white.png" alt="View Nikki's LinkedIn profile" width={width < 768 ? 25 : 30} height={width < 768 ? 25 : 30} />
          </Link>
        </li>
        <li>
          <Link className={styles.social_link} href={links.github.href} target={links.github.target} rel={links.github.rel}>
            <Image src="/github-icon-white.svg" alt="View Nikki's GitHub profile" width={width < 768 ? 25 : 30} height={width < 768 ? 25 : 30} />
          </Link>
        </li>
      </ul>
    </div>
  )
}