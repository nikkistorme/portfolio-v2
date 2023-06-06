import Image from 'next/image'
import styles from '@/styles/Project.module.css'
import Link from 'next/link'

type ProjectProps = {
  project: {
    title: string
    description: string
    repo: string
    url: string
    imgs: {
      alt: string
      srcset: {
        src: string
        width: number
        height: number
      }[]
    }[]
  }
}

export default function Project({project}: ProjectProps): JSX.Element {
  return (
    <div className={styles.project}>
      <div className={styles.project_header}>
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.project_heading}>{project.title}</h3>
        </Link>
        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
          <Image src="/github-icon-white.svg" height='25' width='25' alt={`View the GitHub repository for ${project.title}`} />
        </Link>
      </div>
      <div className={styles.project_images}>
        <div className={`next_image_wrapper`}>
          <Image className={`next_image`} alt={project.imgs[0].alt} src={project.imgs[0].srcset[0].src} fill />
        </div>
        <div className={`next_image_wrapper`}>
          <Image className={`next_image`} alt={project.imgs[1].alt} src={project.imgs[1].srcset[0].src} fill />
        </div>
      </div>
      <p>{project.description}</p>
    </div>
  )
}