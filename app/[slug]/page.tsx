import Page from "@/components/Page";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { getPostData } from "@/lib/post";
import showdown from "showdown";
const converter = new showdown.Converter();
converter.setFlavor("github");

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, createdDate, directions, ingredients } = await getPostData(
    slug
  );
  return (
    <Page>
      <Title>{title}</Title>
      <div>
        <Subtitle>Ingredients</Subtitle>
        {ingredients.map((ingredient) => (
          <div key={ingredient.name}>
            <p>{`${ingredient.value}${ingredient.unitOfMeasure} ${ingredient.name} `}</p>
          </div>
        ))}
      </div>
      <div>
        <Subtitle>Directions</Subtitle>
        <ol className="list-decimal list-inside">
          {directions.map((direction) => (
            <li className="py-1" key={direction}>
              {direction}
            </li>
          ))}
        </ol>
      </div>
    </Page>
  );
}
