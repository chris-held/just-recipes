import { Post } from "@/types";

export const getPostData = async (slug: string): Promise<Post> => {
  const { post } = await import(`../posts/${slug}.tsx`);

  return post as Post;
};
