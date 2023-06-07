import { AxiosPromise } from 'axios';
import { CreateRecipeModel, RecipeId, RecipeModel } from '@/app/models/recipe.model.ts';
import { CommentModel, CreateCommentModel } from '@/app/models/comment.model.ts';

export interface GetAllRecipesParams {
  sortBy?: string;
  search?: string;
}

export interface GetAllRecipes {
  (body?: GetAllRecipesParams): AxiosPromise<RecipeModel[]>;
}

export interface GetRecipe {
  (id: RecipeId): AxiosPromise<RecipeModel>;
}

export interface CreateRecipe {
  (data: CreateRecipeModel): AxiosPromise<RecipeModel>;
}

export interface DeleteRecipe {
  (id: RecipeId): AxiosPromise<RecipeModel>;
}

export interface GetRecipeComments {
  (id: RecipeId): AxiosPromise<CommentModel[]>;
}

export interface CreateRecipeComment {
  (id: RecipeId, data: CreateCommentModel): AxiosPromise<CommentModel>;
}
