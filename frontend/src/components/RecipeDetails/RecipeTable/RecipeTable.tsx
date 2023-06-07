import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import './RecipeTable.scss';

type Props = {
  data: string[];
  title: string;
  placeholder?: string;
};

export const RecipeTable: FC<Props> = ({ title, data, placeholder = 'Пусто' }) => {
  return (
    <Stack className="recipe-table">
      <div className="recipe-table__row recipe-table__row--title">
        <Typography component="p" variant="text-sm">
          {title}:
        </Typography>
      </div>
      {data.length ? (
        data.map((item) => (
          <div className="recipe-table__row">
            <Typography component="p" variant="text-sm">
              {item}
            </Typography>
          </div>
        ))
      ) : (
        <div className="recipe-table__row">
          <Typography component="p" variant="text-sm" textAlign="center" color="gray">
            {placeholder}
          </Typography>
        </div>
      )}
    </Stack>
  );
};
