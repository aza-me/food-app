import { instance } from '@/api';
import {
  CreateRecipe,
  DeleteRecipe,
  GetAllRecipes,
  GetRecipe,
  CreateRecipeComment,
  GetRecipeComments,
  EditRecipe,
} from '@/api/recipes/types.ts';

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

export const editRecipe: EditRecipe = (id, data) => {
  return instance.put(`/recipes/${id}`, data);
};

export const deleteRecipe: DeleteRecipe = (id) => {
  return instance.delete(`/recipes/${id}`);
};

export const getRecipeComments: GetRecipeComments = (id) => {
  return instance.get(`/recipes/${id}/comments`);
};

export const createRecipeComment: CreateRecipeComment = (id, data) => {
  return instance.post(`/recipes/${id}/comments`, data);
};
