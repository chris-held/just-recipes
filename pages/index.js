import Layout from "../components/Layout";
import PostList from "../components/PostList";
import matter from "gray-matter";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout title={title}>
      <div>
        <h1 className="text-center">It's Just Recipes.</h1>
        <main>
          <p className="text-2xl text-center">That's it. That's the site.</p>
          <PostList posts={posts} />
        </main>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
