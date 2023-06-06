import { FC, useEffect, useState, ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { Stack } from '@mui/material';
import { Layout } from '@/components/Layout';
import { UIInput } from '@/components/UI/UIInput';
import { UISelect } from '@/components/UI/UISelect';
import { RecipesList } from '@/components/Recipes';
import { useAppDispatch } from '@/app/hooks/store-hooks.ts';
import { getAllRecipes } from '@/store/recipes/actions.ts';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import './RecipesPage.scss';
import { RecipeId } from '@/app/models/recipe.model.ts';
import { recipesService } from '@/api';

type Props = {};

const SORT_OPTIONS = [
  { label: 'Не выбрано', value: '' },
  { label: 'Быстрее', value: 'ASC' },
  { label: 'Дольше', value: 'DESC' },
];

export const RecipesPage: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState({
    search: '',
    sortBy: SORT_OPTIONS[0],
  });

  useEffect(() => {
    getFilteredRecipes();
  }, [filters]);

  const getFilteredRecipes = () => {
    dispatch(getAllRecipes({ search: filters.search, sortBy: filters.sortBy.value }));
  };

  const handleSearchRecipe = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  }, 300);

  const handleDeleteRecipe = async (id: RecipeId) => {
    try {
      await recipesService.deleteRecipe(id);

      getFilteredRecipes();
    } catch {}
  };

  return (
    <Layout>
      <section className="recipes">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div className="recipes__search">
            <UIInput
              placeholder="Поиск рецепта"
              InputProps={{ endAdornment: <SearchIcon /> }}
              onChange={handleSearchRecipe}
            />
          </div>
          <UISelect
            value={filters.sortBy}
            options={SORT_OPTIONS}
            disableClearable
            onChange={(_, t) => setFilters({ ...filters, sortBy: t as (typeof SORT_OPTIONS)[0] })}
          />
        </Stack>
        <RecipesList handleDelete={handleDeleteRecipe} />
      </section>
    </Layout>
  );
};
