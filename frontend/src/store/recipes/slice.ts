import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipesState } from '@/store/recipes/types.ts';
import { getAllRecipes, getRecipe, getRecipeComments } from '@/store/recipes/actions.ts';
import { RecipeModel } from '@/app/models/recipe.model.ts';

const initialState: RecipesState = {
  recipes: {
    data: [],
  },
  currentRecipe: {
    data: null,
  },
  currentRecipeComments: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setCurrentRecipe: (state, action: PayloadAction<RecipeModel | null>) => {
      state.currentRecipe.data = action.payload;
      state.currentRecipe.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.recipes.loading = true;
        state.recipes.data = [];
      })
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.recipes.data = action.payload;
        state.recipes.loading = false;
      })
      .addCase(getRecipe.pending, (state) => {
        state.currentRecipe.loading = true;
        state.currentRecipe.data = null;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.currentRecipe.data = action.payload;
        state.currentRecipe.loading = false;
      })
      .addCase(getRecipeComments.pending, (state) => {
        state.currentRecipeComments = [];
      })
      .addCase(getRecipeComments.fulfilled, (state, action) => {
        state.currentRecipeComments = action.payload;
      });
  },
});

export const { setCurrentRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
