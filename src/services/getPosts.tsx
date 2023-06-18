export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  return response.json();
};
