import { Post } from "@/types";

export const post: Post = {
  title: "Chocolate Chip Cookies",
  tags: [
    {
      name: "Dessert",
    },
    {
      name: "Baking",
    },
  ],
  ingredients: [
    {
      name: "Flour",
      value: 325,
      unitOfMeasure: "g",
    },
    {
      name: "Baking Soda",
      value: 2.5,
      unitOfMeasure: "g",
    },
    {
      name: "Kosher Salt",
      value: 10,
      unitOfMeasure: "g",
    },
    {
      name: "Room Temperature Butter",
      value: 16,
      unitOfMeasure: "T",
    },
    {
      name: "Brown Sugar",
      value: 1.5,
      unitOfMeasure: "c",
    },
    {
      name: "Sugar",
      value: 0.5,
      unitOfMeasure: "c",
    },
    {
      name: "Eggs",
      value: 2,
      unitOfMeasure: "",
    },
    {
      name: "Chocolate Chips",
      value: 1,
      unitOfMeasure: "c",
    },
  ],
  createdDate: "2024-08-10T01:17:10.708Z",
  directions: [
    "Brown the butter in a medium saucepan, then cool to room temperature.",
    "Cream the butter in a stand mixer with the sugar and brown sugar for 1-3 minutes on medium.",
    "Scrape the sides down and add the eggs.",
    "In a separate bowl mix the dry ingredients.",
    "Add the dry ingredients to the wet ingredients and mix on low until combined. Be careful not to overmix or your cookies will be too chewy.",
    "Fold in chocolate chips. 1 c is a general guideline, you can eyeball how much you want.",
    "Bake at 375 for 10-15 minutes or until golden brown around the edges.",
  ],
};

export default post;
