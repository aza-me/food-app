import { instance } from '@/api';
import { GetAllRecipes, GetRecipe } from '@/api/recipes/types.ts';

export const getAllRecipes: GetAllRecipes = (params) => {
  return instance.get('/recipes', {
    params,
  });
};

export const getRecipe: GetRecipe = (id) => {
  return instance.get(`/recipes/${id}`);
};
