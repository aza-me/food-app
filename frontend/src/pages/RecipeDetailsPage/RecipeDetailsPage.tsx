import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/app/hooks/store-hooks.ts';
import { getRecipe, getRecipeComments } from '@/store/recipes/actions.ts';
import './RecipeDetailsPage.scss';
import { UIButton } from '@/components/UI/UIButton';
import { Stack, Typography } from '@mui/material';
import { RecipeTable } from '@/components/RecipeDetails/RecipeTable';
import { UIInput } from '@/components/UI/UIInput';
import { recipesService } from '@/api';

type Params = {
  recipeId: string;
};

export const RecipeDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { recipeId } = useParams<Params>();

  const {
    currentRecipe: { data: recipe },
    currentRecipeComments,
  } = useAppSelector((state) => state.recipes);

  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(getRecipe(Number(recipeId)));
    dispatch(getRecipeComments(Number(recipeId)));
  }, []);

  const handleCreateComment = async () => {
    try {
      await recipesService.createRecipeComment(Number(recipeId), { content: comment });

      dispatch(getRecipeComments(Number(recipeId)));
    } finally {
      setComment('');
    }
  };

  return (
    <Layout classes={{ main: 'recipe-details__layout' }}>
      {recipe && (
        <section className="recipe-details">
          <Stack direction="row">
            <div className="recipe-details__left">
              <div className="recipe-details__left-inner">
                <div className="recipe-details__image">
                  <img src={recipe.image} alt="Image" />
                </div>
                <div className="recipe-details__manage">
                  <Link to="/" className="recipe-details__to-recipes-link">
                    <UIButton color="primary" outline className="recipe-details__to-recipes-btn">
                      <Typography variant="text-xs" fontWeight={600}>
                        Назад
                      </Typography>
                    </UIButton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="recipe-details__right">
              <div className="recipe-details__part">
                <Typography component="p" variant="text-xs" color="gray" className="recipe-details__recipe">
                  Рецепт:{' '}
                  <Typography component="span" variant="text-sm" color="white">
                    {recipe.cookingTime} мунут
                  </Typography>
                </Typography>
                <Typography component="h3" variant="text-lg" fontWeight={600} className="recipe-details__title">
                  {recipe.title}
                </Typography>
                <Typography component="div" variant="text-xs" className="recipe-details__author">
                  Author: {recipe.author}
                </Typography>
                <Typography component="p" variant="text-sm" marginTop="20px">
                  {recipe.description}
                </Typography>
                <div className="recipe-details__ingredients">
                  <RecipeTable data={recipe.ingredients} title="Ингредиенты" />
                </div>
              </div>
              <div className="recipe-details__part">
                <RecipeTable data={currentRecipeComments.map((c) => c.content)} title="Комментарии"></RecipeTable>

                <Stack direction="row" gap="15px" marginTop="15px">
                  <UIInput value={comment} placeholder="Комментария..." onChange={(e) => setComment(e.target.value)} />
                  <UIButton onClick={handleCreateComment}>Добавить</UIButton>
                </Stack>
              </div>
            </div>
          </Stack>
        </section>
      )}
    </Layout>
  );
};
