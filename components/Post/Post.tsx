import Link from 'next/link';
import Image from 'next/image';

import styles from './Post.module.css';

type PostProps = {
  post: {
    title: string,
    brief: string,
    url: string,
    publishedAt: string,
    coverImage: { url: string }
  }
}

const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" });
}

export default function Post({post}: PostProps): JSX.Element {
  return (
    <article className={styles.post}>
      <Link href={post.url} target="_blank" rel="noopener noreferrer">
        <h3 className={styles.post_heading}>{post.title}</h3>
      </Link>
      <div className={`next_image_wrapper ${styles.post_image_wrapper}`}>
        <Image className={`next_image ${styles.post_image}`} src={post.coverImage?.url} alt='' fill />
      </div>
      <p className={styles.post_brief}>{post.brief}</p>
      <p>{formatDate(post.publishedAt)}</p>
    </article>
  )
}