import { Post } from "@/types";

export const post: Post = {
  title: "Baguettes",
  tags: [
    {
      name: "Bread",
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
      value: 360,
      unitOfMeasure: "g",
    },
    {
      name: "Salt",
      value: 10,
      unitOfMeasure: "g",
    },
    {
      name: "Instant Yeast",
      value: 3,
      unitOfMeasure: "g",
    },
    {
      name: "Honey",
      value: 25,
      unitOfMeasure: "g",
    },
  ],
  createdDate: "2024-08-10T01:17:10.708Z",
  directions: [
    "Mix all ingredients in a bowl, cover with a plastic wrap and let rest for 15 minutes.",
    "Over a period of 1 1/2 hours, do 3 sets of stretch and folds, flipping the dough upside down after each set.",
    "Cover the bowl with a plastic wrap and place in refrigerator overnight for about 12-14 hours.",
    "Turn the dough on a lightly floured work surface. Divide into 3 equal parts and shape into rectangles. Cover and let rest for 45-60 minutes.",
    "Stretch each dough rectangle slightly and fold into a cylinder, sealing the seams. Using your hands, roll the cylinders gently stretching them to desired length, about 14-15 inches.",
    "Place on a lightly floured couche, seam side up. Cover and proof at a room temperature for about 30-60 minutes, or until the dough has sufficiently proofed.",
    "Starting preheating the oven to 500F, with a baking stone positioned in the upper half the oven and a bread pan filled with hot water on the bottom rack.",
    "Transfer the baguettes to a piece of parchment paper, seam side down and dust off excess flour. Using a bread lame, a sharp knife or a razor blade, make 3 scores on each baguette. When scoring, use a swift and firm motion to ensure nice and clean cuts.",
    "Open the oven, taking caution not to get burned by steam, and slide the baguettes off onto the baking stone. Close the oven and reduce temperature to 475F. Bake for 15 minutes.",
    "Remove the water pan, rotate the baguettes, drop the temperature to 450F and continue baking for another 15 minutes or until deep golden brown.",
    "Wait an hour before cutting.",
  ],
  //   directions: `
  //     - Mix all ingredients in a bowl, cover with a plastic wrap and let rest for 15 minutes.
  //     - Over a period of 1 1/2 hours, do 3 sets of stretch and folds, flipping the dough upside down after each set.
  //     - Cover the bowl with a plastic wrap and place in refrigerator overnight for about 12-14 hours.
  //     - Turn the dough on a lightly floured work surface. Divide into 3 equal parts and shape into rectangles. Cover and let rest for 45-60 minutes.
  //     - Stretch each dough rectangle slightly and fold into a cylinder, sealing the seams. Using your hands, roll the cylinders gently stretching them to desired length, about 14-15 inches.
  //     - Place on a lightly floured couche, seam side up. Cover and proof at a room temperature for about 30-60 minutes, or until the dough has sufficiently proofed.
  //     - Starting preheating the oven to 500F, with a baking stone positioned in the upper half the oven and a bread pan filled with hot water on the bottom rack.
  //     - Transfer the baguettes to a piece of parchment paper, seam side down and dust off excess flour. Using a bread lame, a sharp knife or a razor blade, make 3 scores on each baguette. When scoring, use a swift and firm motion to ensure nice and clean cuts.
  //     - Open the oven, taking caution not to get burned by steam, and slide the baguettes off onto the baking stone. Close the oven and reduce temperature to 475F. Bake for 15 minutes.
  //     - Remove the water pan, rotate the baguettes, drop the temperature to 450F and continue baking for another 15 minutes or until deep golden brown.
  //     - Wait an hour before cutting.
  // </div>
  //   `,
};

export default post;
