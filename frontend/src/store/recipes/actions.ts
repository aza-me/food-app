import { createAsyncThunk } from '@reduxjs/toolkit';
import { recipesService } from '@/api';
import { GetAllRecipesParams } from '@/api/recipes/types.ts';
import { RecipeId } from '@/app/models/recipe.model.ts';
import { isEmpty, omitBy } from 'lodash';

export const getAllRecipes = createAsyncThunk('recipes/getRecipes', async (params: GetAllRecipesParams | undefined) => {
  const { data: recipes } = await recipesService.getAllRecipes(omitBy(params, isEmpty));

  return recipes;
});

export const getRecipe = createAsyncThunk('recipes/getRecipe', async (id: RecipeId) => {
  const { data: recipe } = await recipesService.getRecipe(id);

  return recipe;
});

export const getRecipeComments = createAsyncThunk('recipes/getRecipeComments', async (id: RecipeId) => {
  const { data: recipe } = await recipesService.getRecipeComments(id);

  return recipe;
});
