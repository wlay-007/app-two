"use client";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

const Page: NextPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3> loading </h3> : <Posts posts={posts} />}
    </>
  );
};

export default Page;
