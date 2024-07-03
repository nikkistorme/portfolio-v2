import BlogPost from "../BlogPost/BlogPost";

async function gql(query: any, variables = {}): Promise<any> {
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

async function getPosts(): Promise<Array<any>> {
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
}

export default async function BlogSection(): Promise<React.JSX.Element> {
  const posts = await getPosts();

  return (
    <section id="posts" className="flex flex-col items-start gap-6">
      <div>
        <h2 className="text-4xl font-bold">Blog</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {posts?.map((p: { node: any }, i: number) => (
          <BlogPost key={i} post={p.node} />
        ))}
      </div>
    </section>
  )
}