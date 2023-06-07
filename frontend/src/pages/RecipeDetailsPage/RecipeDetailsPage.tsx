import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Stack, Typography } from '@mui/material';
import './RecipeDetailsPage.scss';
import { UIButton } from '@/components/UI/UIButton';
import { useAppDispatch, useAppSelector } from '@/app/hooks/store-hooks.ts';
import { getRecipe } from '@/store/recipes/actions.ts';

type Params = {
  id: string;
};

export const RecipeDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<Params>();

  const { currentRecipe } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipe(+id!));
  }, []);

  return (
    <Layout classes={{ main: 'recipe-details__layout' }}>
      <section className="recipe-details">
        {currentRecipe.data && (
          <Stack direction="row">
            <div className="recipe-details__left">
              <div className="recipe-details__left-inner">
                <div className="recipe-details__image">
                  <img src={currentRecipe.data.image} alt="Image" />
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
                    {currentRecipe.data.cookingTime} мунут
                  </Typography>
                </Typography>
                <Typography component="h3" variant="text-lg" fontWeight={600} className="recipe-details__title">
                  {currentRecipe.data.title}
                </Typography>
                <Typography component="div" variant="text-xs" className="recipe-details__author">
                  Author: {currentRecipe.data.author}
                </Typography>
                <Typography component="p" variant="text-sm" marginTop="20px">
                  {currentRecipe.data.description}
                </Typography>
                <div>
                  <Stack marginTop="20px" className="recipe-details__ingredients-wrapper">
                    <div className="recipe-details__row recipe-details__row--title">
                      <Typography component="p" variant="text-sm">
                        Ингредиенты:
                      </Typography>
                    </div>
                    {currentRecipe.data.ingredients.map((ingredient) => (
                      <div className="recipe-details__row">
                        <Typography component="p" variant="text-sm">
                          {ingredient}
                        </Typography>
                      </div>
                    ))}
                  </Stack>
                </div>
              </div>
            </div>
          </Stack>
        )}
      </section>
    </Layout>
  );
};
