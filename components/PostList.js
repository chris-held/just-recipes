import Link from "next/link";
import { useState } from "react";

const PostList = ({ posts }) => {
  const [filter, setFilter] = useState("");
  if (posts === "undefined") return null;

  const filtered = filter
    ? posts.filter((p) =>
        p.frontmatter.title.toLowerCase().includes(filter.toLowerCase())
      )
    : posts;

  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Search Recipes..."
        name="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      {!filtered && !filtered.length && <div>No recipes found!</div>}
      <ul>
        {filtered &&
          filtered.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostList;
