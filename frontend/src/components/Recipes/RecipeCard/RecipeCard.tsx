import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RecipeId, RecipeModel } from '@/app/models/recipe.model.ts';
import { Stack, Typography } from '@mui/material';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import './RecipeCard.scss';

type Props = {
  recipe: RecipeModel;
  classes?: {
    root?: string;
    media?: string;
    content?: string;
  };
  handleDelete: (id: RecipeId) => void;
};

export const RecipeCard: FC<Props> = ({ recipe, handleDelete }) => {
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

        <Stack direction="row" gap="15px" justifyContent="flex-end">
          <Link to={`/recipes/${recipe.id}/edit`}>
            <EditIcon />
          </Link>
          <span
            onClick={(e) => {
              e.preventDefault();
              handleDelete(recipe.id);
            }}
          >
            <TrashIcon />
          </span>
        </Stack>
      </div>
    </Link>
  );
};
