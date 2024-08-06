import Page from "@/components/Page";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import fs from "fs";
import path from "path";
import { PostMetadata } from "@/types";
import PostListItem from "@/components/PostListItem";

export const revalidate = 60;

const postsDirectory = path.join(process.cwd(), "posts");

export default async function Home() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsMetadata = (await Promise.all(
    fileNames.map(async (fileName) => {
      const { metadata } = await import(`../posts/${fileName}`);

      return {
        fileName,
        ...metadata,
      };
    })
  )) as (PostMetadata & { fileName: string })[];

  return (
    <Page>
      <Title>Just Recipes</Title>
      <Subtitle>That&apos;s it. That&apos;s the site.</Subtitle>
      <div className="flex flex-col gap-2">
        {allPostsMetadata.map((post) => (
          <PostListItem key={post.title} post={post} />
        ))}
      </div>
    </Page>
  );
}
