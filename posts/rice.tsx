import { Post } from "@/types";

export const post: Post = {
  title: "Rice",
  tags: [
    {
      name: "Staple",
    },
  ],
  ingredients: [
    {
      name: "Rice",
      value: 2,
      unitOfMeasure: "C",
    },
    {
      name: "Water",
      value: 3,
      unitOfMeasure: "C",
    },
    {
      name: "Butter",
      value: 2,
      unitOfMeasure: "T",
    },
  ],
  createdDate: "2024-09-15T01:17:10.708Z",
  directions: [
    "Melt butter in a medium saucepan over low heat.",
    "Rinse the rice to remove some of the starch. This will make the rice last longer and not get really hard when refrigerated. Add to a mixing bowl with water and stir the rice around with your hand. Drain and repeat until the water is no longer cloudy when stirring. ",
    "Add whatever seasoning you like to the melted butter. I usually add garlic and salt but anything will work here depending on your tastes.",
    "Cover and simmer for 20 minutes.",
    "Remove from heat and keep covered for an additional 5 minutes before eating or storing.",
  ],
};

export default post;
