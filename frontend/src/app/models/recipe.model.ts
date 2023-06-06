export type RecipeId = number;

export interface RecipeModel {
  id: RecipeId;
  author: string;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  cookingTime: number;
}

export interface RecipeDetailedModel extends RecipeModel {}
