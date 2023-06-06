import { RecipeModel } from '@/app/models/recipe.model.ts';

interface DataLoading<T> {
  data: T;
  loading?: boolean;
}

export interface RecipesState {
  recipes: DataLoading<RecipeModel[]>;
  currentRecipe: DataLoading<RecipeModel | null>;
}
