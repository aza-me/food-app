import { FC } from 'react';
import { RecipeModel } from '@/app/models/recipe.model.ts';
import './RecipeCard.scss';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  recipe: RecipeModel;
  classes?: {
    root?: string;
    media?: string;
    content?: string;
  };
};

export const RecipeCard: FC<Props> = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="recipe-card__preview">
        <div className="recipe-card__image">
          <img src={recipe.image} alt="Pizza" />
        </div>
      </div>
      <div>
        <Typography component="h3" variant="text-default" color="white" fontWeight={600} className="recipe-card__title">
          {recipe.title}
        </Typography>
        <Typography component="p" variant="text-sm" marginTop="4px">
          {recipe.author || 'Unknown'}
        </Typography>

        <Typography component="p" variant="text-xs" marginTop="16px">
          Время приготовления:
        </Typography>
        <Typography component="p" variant="text-sm" color="white" fontWeight={600} marginTop="4px">
          {recipe.cookingTime} мин
        </Typography>
      </div>
    </Link>
  );
};
