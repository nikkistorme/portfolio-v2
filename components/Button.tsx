import Link from 'next/link';

import styles from '@/styles/Button.module.css'

type buttonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  href?: string,
  target?: string,
  rel?: string
};

export default function Button({ children, onClick, href, target, rel }: buttonProps): JSX.Element {
  if (!href) {
    return (
      <button type="button" className={styles.button} onClick={onClick}>{children}</button>
    )
  } else {
    return (
      <Link className={styles.button} href={href} target={target} rel={rel}>{children}</Link>
    )
  }
}