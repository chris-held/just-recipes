import { Post } from "@/types";

export const post: Post = {
  title: "Sourdough Bread",
  tags: [
    {
      name: "Bread",
    },
    {
      name: "Baking",
    },
    {
      name: "Sourdough",
    },
  ],
  ingredients: [
    {
      name: "Flour",
      value: 500,
      unitOfMeasure: "g",
    },
    {
      name: "Water",
      value: 350,
      unitOfMeasure: "g",
    },
    {
      name: "Salt",
      value: 10,
      unitOfMeasure: "g",
    },
    {
      name: "Sourdough Starter",
      value: 50,
      unitOfMeasure: "g",
    },
  ],
  createdDate: "2024-08-24T01:17:10.708Z",
  directions: [
    "Mix sourdough starter and water in a bowl and whisk to combine. If you're not sure if your starter is bubbly enough you can add 1 or 2g of yeast at this point to make sure you get a good rise.",
    "Add the flour and salt and mix together to form a sticky dough. Cover and let rest for 30 minutes.",
    "After 30 minutes work the dough into a small ball with wet hands. Optionally you can stretch and fold your dough at this point too.",
    "Cover again and let rest overnight, anywhere from 8-16 hours.",
    "Using floured hands, gently pull the dough from your bowl onto a floured work surface. Add flour to the dough and work the dough into a ball and let rest for 10-15 minutes.",
    "Line a bowl with a flour dusted towel and transfer the dough to the bowl seam side up. Cover the top with a piece of parchment paper and let rest another 30-60 minutes.",
    "Preheat your oven to 450.",
    "Flip the bowl upside down so the parchment paper is on the bottom. Cut an X into the dough using a sharp knife or razor blade and transfer to a Dutch Over.",
    "Bake covered for 15-20 minutes, then uncovered for 20-30 minutes or until the bread has an internal temperature of 195. Let rest an hour before cutting.",
  ],
};

export default post;
