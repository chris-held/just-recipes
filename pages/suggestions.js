import {useState} from 'react'
import Layout from "../components/Layout";
import Link from "next/link";


import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Suggestions = ({ posts, title, description, ...props }) => {
  const [text, setText] = useState(`
---
title: "Your Title"
date: "M/D/YYYY"
ingredients: "comma seperated list of ingredients, ex flour, salt, yeast"
---

## Ingredients

- 1 c Example
- 2 T Another example
- 1/4 t A third example

## Directions

- List directions like this
- give as much or as little info as you want
- just remember the point of this is to try and be terse and informational only
- No life stories! 😁

  `);
  return (
    <Layout title={title}>
      <div>
      <Link href="/">
        <a>Back to Recipes</a>
      </Link>
        <h1 className="text-center">Have a Suggestion?</h1>
        <main>
          <p className="text-2xl text-center">Enter in your recipe below. You can either follow the provided format, or drop a link.</p>
          <form
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >

            <input type="hidden" name="form-name" value="suggestions" />
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />
            <Button type="submit">
                Submit
            </Button>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default Suggestions;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}