import { NextPage } from "next";
import Link from "next/link";

const TheHeader: NextPage = ({}) => {
  return (
    <header className="flex h-16 items-center gap-2 bg-gray-200/60 px-3">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default TheHeader;
