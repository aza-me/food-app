import { CircularProgress, Grid } from '@mui/material';
import { RecipeCard } from '@/components/Recipes';
import { useAppSelector } from '@/app/hooks/store-hooks.ts';

export const RecipesList = () => {
  const { recipes } = useAppSelector((state) => state.recipes);

  return (
    <Grid container rowSpacing="20px" columnSpacing="20px" marginTop={0}>
      {!recipes.loading ? (
        recipes.data.map((recipe) => (
          <Grid item xs={3}>
            <RecipeCard recipe={recipe} />
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
