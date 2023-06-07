import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Stack, Typography } from '@mui/material';
import './RecipeDetailsPage.scss';
import { UIButton } from '@/components/UI/UIButton';
import { useAppDispatch } from '@/app/hooks/store-hooks.ts';
import { getRecipe } from '@/store/recipes/actions.ts';

type Params = {
  id: string;
};

export const RecipeDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<Params>();

  useEffect(() => {
    dispatch(getRecipe(+id!));
  }, []);

  return (
    <Layout classes={{ main: 'recipe-details__layout' }}>
      <section className="recipe-details">
        <Stack>
          <div className="recipe-details__left">
            <div className="recipe-details__left-inner">
              <div className="recipe-details__image">
                <img src="https://docs.uswap.me/storage/2c127317011c1938aadd1b4e6266951d.png" />
              </div>
              <div className="recipe-details__manage">
                <Link to="/" className="recipe-details__to-recipes-link">
                  <UIButton color="primary" outline className="recipe-details__to-recipes-btn">
                    <Typography variant="text-xs" fontWeight={600}>
                      В рецепты
                    </Typography>
                  </UIButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="recipe-details__right"></div>
        </Stack>
      </section>
    </Layout>
  );
};
