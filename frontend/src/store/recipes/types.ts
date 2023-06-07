import { RecipeModel } from '@/app/models/recipe.model.ts';
import { CommentModel } from '@/app/models/comment.model.ts';

interface DataLoading<T> {
  data: T;
  loading?: boolean;
}

export interface RecipesState {
  recipes: DataLoading<RecipeModel[]>;
  currentRecipe: DataLoading<RecipeModel | null>;

  currentRecipeComments: CommentModel[];
}
