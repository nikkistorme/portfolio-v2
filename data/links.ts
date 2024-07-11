import { EmailIcon } from "@/components/Icons";

const links = {
  "blog": {
    "href": "https://blog.nikkibright.com",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "posts": {
    "href": "#posts",
    "target": "",
    "rel": ""
  },
  "projects": {
    "href": "#projects",
    "target": "",
    "rel": ""
  },
  "about": {
    "href": "#about",
    "target": "",
    "rel": ""
  },
  "email": {
    "href": "mailto:nikkistorme@gmail.com",
    "target": "",
    "rel": ""
  },
  "angel_list": {
    "href": "https://angel.co/nicholas-bright-3/",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "linkedin": {
    "href": "https://www.linkedin.com/in/nikki-bright/",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "github": {
    "href": "https://github.com/nikkistorme",
    "target": "_blank",
    "rel": "noopener noreferrer"
  }
}

export const mainNavLinks = [
  {
    "href": links.posts.href,
    "target": links.posts.target,
    "rel": links.posts.rel,
    "label": "Blog"
  },
  {
    "href": links.projects.href,
    "target": links.projects.target,
    "rel": links.projects.rel,
    "label": "Projects"
  }
];

export const socialLinks = [
  {
    "href": links.email.href,
    "target": links.email.target,
    "rel": links.email.rel,
    "label": "Email",
  },
  {
    "href": links.linkedin.href,
    "target": links.linkedin.target,
    "rel": links.linkedin.rel,
    "label": "LinkedIn"
  },
  {
    "href": links.github.href,
    "target": links.github.target,
    "rel": links.github.rel,
    "label": "GitHub"
  }
];