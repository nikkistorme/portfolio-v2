type Link = {
  href: string
  target: string
  rel: string
  label: string
}

type Project = {
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