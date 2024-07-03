import Image from "next/image"
import Link from "next/link"

export default function Project({
  project
}: {
  project: {
    title: string
    description: string
    repo: string
    url: string
    imgs: {
      alt: string
      srcset: {
        src: string
      }[]
    }[]
  }
}): React.JSX.Element | null {
  if (!project) return null;

  return (
    <article className="flex flex-col gap-4 p-6 rounded-xl bg-zinc-800">
      <div className="flex justify-between items-start">
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl text-primary font-bold">{project.title}</h3>
        </Link>
        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
          <Image src="/github-icon-white.svg" height='30' width='30' alt={`View the GitHub repository for ${project.title}`} />
        </Link>
      </div>
      <div className="grid grid-cols-[74%,21%] gap-[5%]">
        <div className="relative w-full h-44 md:h-44 lg:h-52">
          <Image className="object-left object-contain rounded-md" alt={project.imgs[0].alt} src={project.imgs[0].srcset[0].src} fill />
        </div>
        <div className="relative w-full h-44 md:h-44 lg:h-52">
          <Image className="object-right object-contain rounded-md" alt={project.imgs[1].alt} src={project.imgs[1].srcset[0].src} fill />
        </div>
      </div>
      <p>{project.description}</p>
    </article>
  )
}