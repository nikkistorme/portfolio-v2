import { useState, useEffect } from 'react';
import Head from 'next/head'

import Post from '@/components/Post'
import Project from '@/components/Project'
import projects from '@/data/projects.json'
import styles from '@/styles/Home.module.css'

const gql = async (query: any, variables={}) => {
  const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query,
          variables
      })
  });

  return await data.json();
}

const getUserArticles = async () => {
  const query = `
    query GetUserArticles($page: Int!) {
      user(username: "nikkistorme") {
          publication {
              domain
              posts(page: $page) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
              }
          }
      }
    }
  `
  const data = await gql(query, { page: 0 });
  const posts = data.data.user.publication.posts;

  return posts;
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length !== 0) return;
    getUserArticles().then((posts) => {
      setPosts(posts);
    });
  });

  return (
    <>
      <Head>
        <title>Nikki Bright | UX Developer</title>
        <meta name="description" content="Nikki Bright is a front-end web developer working remotely out of Austin, TX." />
      </Head>
      <h1>Hey-oh! I&apos;m Nikki Bright</h1>
      <div className={styles.home_sections}>
        <section id="about" className={styles.about_section}>
          <div className={styles.about_section_description}>
            <p>I&apos;m an accessibility-focused front-end developer dedicated to making the web more inclusive and joyful for all users.</p>
            <p>If you&apos;d like to chat about my work, Magic: The Gathering, or fantasy novels, I would love to connect!</p>
          </div>
        </section>
        <section id="posts" className={styles.blog_section}>
          <div className={styles.blog_heading_wrapper}>
            <h2>Blog</h2>
            {/* <Link href={links.blog.href} target={links.blog.target} rel={links.github.rel}>View all posts</Link> */}
          </div>
          <div className={styles.blog_posts_container}>
            {posts.map((p, i) => (
              <Post post={p} key={i} />
            ))}
          </div>
        </section>
        <section id="projects" className={styles.projects_section}>
          <h2>Projects</h2>
          <div className={styles.projects_wrapper}>
            {projects?.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
