import { NextPage } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

const Page: NextPage = async () => {
  const posts = await getData();
  return (
    <div className="my-6 flex flex-col gap-3">
      {posts.map((post: any) => (
        <Link
          className="w-100 flex h-8 items-center rounded-lg bg-gray-200 p-3"
          key={post.id}
          href={`/blog/${post.id}`}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Page;
