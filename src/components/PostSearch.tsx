"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { data } from "autoprefixer";
import { title } from "process";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

function PostSearch({ onSearch }: Props) {
  const [search, setSearch] = useState("");

  const hendlerSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts); //вызов функции которую мы передали
  };
  return (
    <form action="submit" onSubmit={hendlerSubmit}>
      <input
        className=" mt-4 rounded-xl border-2 border-slate-700 p-1 outline-none"
        type="search"
        value={search}
        placeholder="Serch Post"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        className="ml-1 rounded-xl border-2 border-slate-700 p-1 outline-none"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default PostSearch;
