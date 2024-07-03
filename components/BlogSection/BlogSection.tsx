import { useEffect, useState } from "react";

import styles from "./BlogSection.module.css";
import Post from "../Post/Post";

const gql = async (query: any, variables = {}) => {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await data.json();
};

const getUserArticles = async () => {
  const query = `
    query Publication {
      publication(host: "blog.nikkibright.com") {
        isTeam
        title
        posts(first: 10) {
            edges {
                node {
                    title
                    brief
                    url
                    publishedAt
                    coverImage {
                      url
                    }
                }
            }
        }
      }
    }
  `;
  const data = await gql(query, { page: 0 });
  const posts = data?.data?.publication?.posts?.edges || [];

  return posts;
};

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length !== 0) return;
    getUserArticles().then((posts) => {
      setPosts(posts);
    });
  });

  return (
    <section id="posts" className={styles.blog_section}>
      <div className={styles.blog_heading_wrapper}>
        <h2>Blog</h2>
        {/* <Link href={links.blog.href} target={links.blog.target} rel={links.github.rel}>View all posts</Link> */}
      </div>
      <div className={styles.blog_posts_container}>
        {posts?.map((p: any, i: number) => (
          <Post post={p.node} key={i} />
        ))}
      </div>
    </section>
  )
}