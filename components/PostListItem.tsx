import { Post } from "@/types";
import React from "react";

export interface PostListItemProps {
  post: Post & { fileName: string };
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <div>
      <p>{post.title}</p>
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <div className="border-stone-300 rounded border p-1" key={tag.name}>
            <p className="text-sm">{tag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostListItem;
