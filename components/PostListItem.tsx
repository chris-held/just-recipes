import { PostMetadata } from "@/types";
import React from "react";

export interface PostListItemProps {
  post: PostMetadata & { fileName: string };
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export default PostListItem;
