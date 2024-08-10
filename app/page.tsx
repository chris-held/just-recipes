import Page from "@/components/Page";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import fs from "fs";
import path from "path";
import PostListItem from "@/components/PostListItem";
import { Post } from "@/types";
import Link from "next/link";

export const revalidate = 60;

const postsDirectory = path.join(process.cwd(), "posts");

export default async function Home() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsMetadata = (await Promise.all(
    fileNames.map(async (fileName) => {
      const { post } = await import(`../posts/${fileName}`);

      return {
        fileName,
        ...post,
      };
    })
  )) as (Post & { fileName: string })[];

  return (
    <Page>
      <Title>Just Recipes</Title>
      <Subtitle>That&apos;s it. That&apos;s the site.</Subtitle>
      <div className="flex flex-col gap-2 pt-2">
        {allPostsMetadata.map((post) => (
          <Link key={post.title} href={`/${post.fileName.replace(".tsx", "")}`}>
            <PostListItem post={post} />
          </Link>
        ))}
      </div>
    </Page>
  );
}
