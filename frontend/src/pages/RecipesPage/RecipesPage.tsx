import { FC, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { Layout } from '@/components/Layout';
import { UIInput } from '@/components/UI/UIInput';
import { UISelect } from '@/components/UI/UISelect';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { RecipeCard } from '@/components/Recipes';
import './RecipesPage.scss';

type Props = {};

const SORT_OPTIONS = [
  { label: 'Не выбрано', value: '' },
  { label: 'Новые', value: 'new' },
  { label: 'Старые', value: 'old' },
];

const DATA = [
  {
    id: 7,
    author: 'Azizbek Savkimov',
    title: 'Spicy Grilled Turkey Burger with Coleslaw',
    description:
      'Spicy grilled turkey burger served with tomatoes, sweet pickles, and coleslaw. Not your everyday turkey burger, these have fresh chives, bread crumbs, basil and Tabasco sauce.',
    ingredients: [
      '1 1/2 pounds ground turkey (white meat, dark meat, or a mixture)',
      '1/2 cup fresh bread crumbs',
      '3 Tbsp mayonnaise',
      '1 1/2 to 3 teaspoons of hot chile sauce such as Tabasco sauce (amount depends on how spicy you like your foods), or Tabasco Chipotle sauce',
      '2 green onions, minced, white and green parts',
      '4 fresh basil leaves, thinly sliced',
      '1 teaspoon sea salt, or more to taste',
      '1/2 teaspoon freshly ground pepper, or more to taste',
      '4 hamburger buns, lightly toasted',
      'Sweet pickle slices',
      '1 tomato, cored and sliced',
    ],
    image:
      'https://www.simplyrecipes.com/thmb/l2tD6MGiNcoMAvyJgR5qaf8Dx24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__08__spicy-turkey-burger-coleslaw-vertical-a-1600-bce1d3c389cf48e395b5f7c0351f3d85.jpg',
    cookingTime: 60,
  },
  {
    id: 7,
    author: 'Azizbek Savkimov',
    title: 'Spicy Grilled Turkey Burger with Coleslaw',
    description:
      'Spicy grilled turkey burger served with tomatoes, sweet pickles, and coleslaw. Not your everyday turkey burger, these have fresh chives, bread crumbs, basil and Tabasco sauce.',
    ingredients: [
      '1 1/2 pounds ground turkey (white meat, dark meat, or a mixture)',
      '1/2 cup fresh bread crumbs',
      '3 Tbsp mayonnaise',
      '1 1/2 to 3 teaspoons of hot chile sauce such as Tabasco sauce (amount depends on how spicy you like your foods), or Tabasco Chipotle sauce',
      '2 green onions, minced, white and green parts',
      '4 fresh basil leaves, thinly sliced',
      '1 teaspoon sea salt, or more to taste',
      '1/2 teaspoon freshly ground pepper, or more to taste',
      '4 hamburger buns, lightly toasted',
      'Sweet pickle slices',
      '1 tomato, cored and sliced',
    ],
    image:
      'https://www.simplyrecipes.com/thmb/l2tD6MGiNcoMAvyJgR5qaf8Dx24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__08__spicy-turkey-burger-coleslaw-vertical-a-1600-bce1d3c389cf48e395b5f7c0351f3d85.jpg',
    cookingTime: 60,
  },
  {
    id: 7,
    author: 'Azizbek Savkimov',
    title: 'Spicy Grilled Turkey Burger with Coleslaw',
    description:
      'Spicy grilled turkey burger served with tomatoes, sweet pickles, and coleslaw. Not your everyday turkey burger, these have fresh chives, bread crumbs, basil and Tabasco sauce.',
    ingredients: [
      '1 1/2 pounds ground turkey (white meat, dark meat, or a mixture)',
      '1/2 cup fresh bread crumbs',
      '3 Tbsp mayonnaise',
      '1 1/2 to 3 teaspoons of hot chile sauce such as Tabasco sauce (amount depends on how spicy you like your foods), or Tabasco Chipotle sauce',
      '2 green onions, minced, white and green parts',
      '4 fresh basil leaves, thinly sliced',
      '1 teaspoon sea salt, or more to taste',
      '1/2 teaspoon freshly ground pepper, or more to taste',
      '4 hamburger buns, lightly toasted',
      'Sweet pickle slices',
      '1 tomato, cored and sliced',
    ],
    image:
      'https://www.simplyrecipes.com/thmb/l2tD6MGiNcoMAvyJgR5qaf8Dx24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__08__spicy-turkey-burger-coleslaw-vertical-a-1600-bce1d3c389cf48e395b5f7c0351f3d85.jpg',
    cookingTime: 60,
  },
  {
    id: 7,
    author: 'Azizbek Savkimov',
    title: 'Spicy Grilled Turkey Burger with Coleslaw',
    description:
      'Spicy grilled turkey burger served with tomatoes, sweet pickles, and coleslaw. Not your everyday turkey burger, these have fresh chives, bread crumbs, basil and Tabasco sauce.',
    ingredients: [
      '1 1/2 pounds ground turkey (white meat, dark meat, or a mixture)',
      '1/2 cup fresh bread crumbs',
      '3 Tbsp mayonnaise',
      '1 1/2 to 3 teaspoons of hot chile sauce such as Tabasco sauce (amount depends on how spicy you like your foods), or Tabasco Chipotle sauce',
      '2 green onions, minced, white and green parts',
      '4 fresh basil leaves, thinly sliced',
      '1 teaspoon sea salt, or more to taste',
      '1/2 teaspoon freshly ground pepper, or more to taste',
      '4 hamburger buns, lightly toasted',
      'Sweet pickle slices',
      '1 tomato, cored and sliced',
    ],
    image:
      'https://www.simplyrecipes.com/thmb/l2tD6MGiNcoMAvyJgR5qaf8Dx24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__08__spicy-turkey-burger-coleslaw-vertical-a-1600-bce1d3c389cf48e395b5f7c0351f3d85.jpg',
    cookingTime: 60,
  },
  {
    id: 7,
    author: 'Azizbek Savkimov',
    title: 'Spicy Grilled Turkey Burger with Coleslaw',
    description:
      'Spicy grilled turkey burger served with tomatoes, sweet pickles, and coleslaw. Not your everyday turkey burger, these have fresh chives, bread crumbs, basil and Tabasco sauce.',
    ingredients: [
      '1 1/2 pounds ground turkey (white meat, dark meat, or a mixture)',
      '1/2 cup fresh bread crumbs',
      '3 Tbsp mayonnaise',
      '1 1/2 to 3 teaspoons of hot chile sauce such as Tabasco sauce (amount depends on how spicy you like your foods), or Tabasco Chipotle sauce',
      '2 green onions, minced, white and green parts',
      '4 fresh basil leaves, thinly sliced',
      '1 teaspoon sea salt, or more to taste',
      '1/2 teaspoon freshly ground pepper, or more to taste',
      '4 hamburger buns, lightly toasted',
      'Sweet pickle slices',
      '1 tomato, cored and sliced',
    ],
    image:
      'https://www.simplyrecipes.com/thmb/l2tD6MGiNcoMAvyJgR5qaf8Dx24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__08__spicy-turkey-burger-coleslaw-vertical-a-1600-bce1d3c389cf48e395b5f7c0351f3d85.jpg',
    cookingTime: 60,
  },
];

export const RecipesPage: FC<Props> = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

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
        <Grid container rowSpacing="20px" columnSpacing="20px" marginTop={0}>
          {DATA.map((recipe) => (
            <Grid item xs={3}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Layout>
  );
};
