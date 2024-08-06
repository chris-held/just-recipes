export interface PostMetadata {
  title: string;
  createdDate: string;
  ingredients: Ingredient[];
  tags: Tag[];
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
