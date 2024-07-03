import BlogSection from "@/components/BlogSection/BlogSection";
import Project from "@/components/Project/Project";
import projects from "@/data/projects.json";

export default function Home() {
  return (
    <main id="#main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
      <h1 className="text-5xl text-primary font-bold">Hey-oh! I&apos;m Nikki Bright</h1>
      <div
        className="flex flex-col gap-10 lg:gap-16"
      >
        <section id="about" className="pt-6">
          <div className="flex flex-col gap-3 max-w-xl md:text-xl">
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

        <section id="projects" className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects?.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
