import Link from "next/link";
type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  console.log(posts.length);
  return (
    <div className="my-3 flex flex-col gap-4">
      {posts.length ? (
        posts.map((post) => (
          <Link
            className="flex h-10 items-center rounded-xl bg-zinc-200 p-3"
            key={post.id}
            href={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
        ))
      ) : (
        <h1 className="flex h-10 items-center rounded-xl bg-red-200 p-3">
          ничего не найдено
        </h1>
      )}
    </div>
  );
};

export default Posts;
