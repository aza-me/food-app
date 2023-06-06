import { AxiosPromise } from 'axios';
import { RecipeId, RecipeModel } from '@/app/models/recipe.model.ts';

export interface GetAllRecipesParams {
  sortBy?: 'ASC' | 'DESC';
  search?: string;
}

export interface GetAllRecipes {
  (body?: GetAllRecipesParams): AxiosPromise<RecipeModel[]>;
}

export interface GetRecipe {
  (id: RecipeId): AxiosPromise<RecipeModel>;
}
