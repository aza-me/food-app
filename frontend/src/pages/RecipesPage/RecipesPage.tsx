import { FC, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Layout } from '@/components/Layout';
import { UIInput } from '@/components/UI/UIInput';
import { UISelect } from '@/components/UI/UISelect';
import { RecipesList } from '@/components/Recipes';
import { useAppDispatch } from '@/app/hooks/store-hooks.ts';
import { getAllRecipes } from '@/store/recipes/actions.ts';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import './RecipesPage.scss';

type Props = {};

const SORT_OPTIONS = [
  { label: 'Не выбрано', value: '' },
  { label: 'Новые', value: 'new' },
  { label: 'Старые', value: 'old' },
];

export const RecipesPage: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  return (
    <Layout>
      <section className="recipes">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div className="recipes__search">
            <UIInput
              value={search}
              placeholder="Поиск рецепта"
              InputProps={{ endAdornment: <SearchIcon /> }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <UISelect
            value={sortBy}
            options={SORT_OPTIONS}
            disableClearable
            onChange={(_, t) => setSortBy(t as (typeof SORT_OPTIONS)[0])}
          />
        </Stack>
        <RecipesList />
      </section>
    </Layout>
  );
};
