import { FC } from 'react';
import { RecipeModel } from '@/app/models/recipe.model.ts';
import './RecipeCard.scss';
import { Typography } from '@mui/material';

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
    <div className="recipe-card">
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
          Time cook
        </Typography>
        <Typography component="p" variant="text-sm" color="white" fontWeight={600} marginTop="3px">
          {recipe.cookingTime} min
        </Typography>
      </div>
    </div>
  );
};
