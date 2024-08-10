export interface Post {
  title: string;
  createdDate: string;
  ingredients: Ingredient[];
  tags: Tag[];
  directions: string[];
}

export interface Ingredient {
  name: string;
  value: number;
  unitOfMeasure: string;
}

export interface Tag {
  name: string;
  // possibly support categorization in the future
}
