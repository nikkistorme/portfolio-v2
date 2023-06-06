import Link from 'next/link';
import Image from 'next/image';

import links from '@/data/links.json';

import styles from '@/styles/Post.module.css'

type PostProps = {
  post: {
    title: string,
    brief: string,
    slug: string,
    dateAdded: string,
    coverImage: string
  }
}

const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" });
}

export default function Post({post}: PostProps): JSX.Element {
  return (
    <div className={styles.post}>
      <Link href={`${links.blog.href}/${post.slug}`} target="_blank" rel="noopener noreferrer">
        <h3 className={styles.post_heading}>{post.title}</h3>
      </Link>
      <div className={`next_image_wrapper ${styles.post_image_wrapper}`}>
        <Image className={`next_image ${styles.post_image}`} src={post.coverImage} alt='' fill />
      </div>
      <p className={styles.post_brief}>{post.brief}</p>
      <p>{formatDate(post.dateAdded)}</p>
    </div>
  )
}