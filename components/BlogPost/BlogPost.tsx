import Image from "next/image";
import Link from "next/link";

export default function BlogPost({
  post
}: {
  post: {
    title: string;
    brief: string;
    url: string;
    publishedAt: string;
    coverImage: {
      url: string;
    };
  };
}): React.JSX.Element | null {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" });
  }

  return (
    <article className="flex flex-col gap-2 md:gap-4 p-6 rounded-xl bg-zinc-800">
      <Link href={post.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-2xl text-primary font-bold blog_post-title">{post.title}</h3>
      </Link>
      <div className="relative flex h-44 w-full mt-auto overflow-hidden rounded-md">
        <Image className="object-cover" src={post.coverImage.url} alt={post.title} fill={true} />
      </div>
      <p className="line-clamp-2">{post.brief}</p>
      <p>{formatDate(post.publishedAt)}</p>
    </article>
  )
}