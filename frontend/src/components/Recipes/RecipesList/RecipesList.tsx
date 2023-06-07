import { CircularProgress, Grid } from '@mui/material';
import { RecipeCard } from '@/components/Recipes';
import { useAppSelector } from '@/app/hooks/store-hooks.ts';
import { RecipeId } from '@/app/models/recipe.model.ts';
import { FC } from 'react';
import './RecipesList.scss';

interface Props {
  handleDelete: (id: RecipeId) => void;
}

export const RecipesList: FC<Props> = ({ handleDelete }) => {
  const { recipes } = useAppSelector((state) => state.recipes);

  if (!recipes.loading && !recipes.data.length) {
    return <div className="recipes__list-placeholder">Пусто, создайте рецепт!</div>;
  }

  return (
    <Grid container rowSpacing="20px" columnSpacing="20px" marginTop={0}>
      {!recipes.loading ? (
        recipes.data.map((recipe) => (
          <Grid item xs={3}>
            <RecipeCard recipe={recipe} handleDelete={handleDelete} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} textAlign="center" marginTop="40px">
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};
