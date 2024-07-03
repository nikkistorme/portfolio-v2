import Head from "next/head";

import Project from "@/components/Project/Project";
import projects from "@/data/projects.json";
import styles from "@/styles/Home.module.css";
import BlogSection from "@/components/BlogSection/BlogSection";

export default function Home() {

  return (
    <>
      <Head>
        <title>Nikki Bright | UX Developer</title>
        <meta
          name="description"
          content="Nikki Bright is a front-end web developer working remotely out of Austin, TX."
        />
      </Head>
      <h1>Hey-oh! I&apos;m Nikki Bright</h1>
      <div className={styles.home_sections}>
        <section id="about" className={styles.about_section}>
          <div className={styles.about_section_description}>
            <p>
              I&apos;m an accessibility-focused front-end developer dedicated to
              making the web more inclusive and joyful for all users.
            </p>
            <p>
              If you&apos;d like to chat about my work, Magic: The Gathering, or
              fantasy novels, I would love to connect!
            </p>
          </div>
        </section>

        <BlogSection />

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
  );
}
