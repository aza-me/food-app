import { createBrowserRouter } from 'react-router-dom';
import { RecipesPage } from '@/pages/RecipesPage';
import { CreateRecipePage } from '@/pages/CreateRecipePage';
import { RecipeDetailsPage } from '@/pages/RecipeDetailsPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RecipesPage />,
  },
  {
    path: '/recipes/:recipeId',
    element: <RecipeDetailsPage />,
  },
  {
    path: '/recipes/create',
    element: <CreateRecipePage />,
  },
]);

export default routes;
