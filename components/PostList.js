import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";

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
        aria-label="Search"
        className="my-4 shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setFilter(e.target.value)}
      />
      {!filtered && !filtered.length && <div>No recipes found!</div>}
      <ul>
        {filtered &&
          filtered.map((post) => {
            return (
              <li key={post.slug} className="py-1">
                <Link href="/post/[postname]" as={`/post/${post.slug}`}>
                  <a className="text-lg">{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
      <Footer/>
    </div>
  );
};

export default PostList;
