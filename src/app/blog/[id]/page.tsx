import { NextPage } from "next";
import Link from "next/link";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const post = await getData(id);

  return (
    <div className="max-w-xl">
      <h1 className=" text-2xl font-bold">{post.title}</h1>
      <h2 className="font-semibold text-lime-400">{post.body}</h2>
      <h3 className="font-medium">user id - {post.userId}</h3>
      <Link className="mt-2" href="/blog">
        <img src="/next.svg" />
      </Link>
    </div>
  );
};

export default Page;

//params - папка [id] -- { params: { id: '1235' }, searchParams: {} }
