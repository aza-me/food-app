import { instance } from '@/api';
import { CreateRecipe, DeleteRecipe, GetAllRecipes, GetRecipe } from '@/api/recipes/types.ts';

export const getAllRecipes: GetAllRecipes = (params) => {
  return instance.get('/recipes', {
    params,
  });
};

export const getRecipe: GetRecipe = (id) => {
  return instance.get(`/recipes/${id}`);
};

export const createRecipe: CreateRecipe = (data) => {
  return instance.post(`/recipes`, data);
};

export const deleteRecipe: DeleteRecipe = (id) => {
  return instance.delete(`/recipes/${id}`);
};
