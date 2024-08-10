import { Post } from "@/types";

export const post: Post = {
  title: "Sourdough Pancakes",
  tags: [
    {
      name: "Breakfast",
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
      value: 190,
      unitOfMeasure: "g",
    },
    {
      name: "Brown Sugar",
      value: 24,
      unitOfMeasure: "g",
    },
    {
      name: "Baking Powder",
      value: 20,
      unitOfMeasure: "g",
    },
    {
      name: "Baking Soda",
      value: 10,
      unitOfMeasure: "g",
    },
    {
      name: "Protein Powder",
      value: 50,
      unitOfMeasure: "g",
    },
    {
      name: "Sourdough Starter Discard",
      value: 240,
      unitOfMeasure: "g",
    },
    {
      name: "Eggs",
      value: 2,
      unitOfMeasure: "",
    },
    {
      name: "Melted Butter",
      value: 3,
      unitOfMeasure: "T",
    },
    {
      name: "Milk",
      value: 1.25,
      unitOfMeasure: "Cups",
    },
  ],
  createdDate: "2024-08-10T01:17:10.708Z",
  directions: [
    "Mix the dry ingredients together and whisk to combine.",
    "In a separate bowl, mix the wet ingredients",
    "Fold wet ingredients into the dry ingredients and gently mix to form a batter. A few streaks or lumps are better than overmixing.",
    "Melt a tablespoon of butter in a medium saucepan over low heat to coat the bottom of the pan.",
    "Pour roughly 1/3 c of batter per pancake. Cook 1-2 minutes, flip, repeat, etc.",
  ],
};

export default post;
