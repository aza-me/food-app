import { createBrowserRouter } from 'react-router-dom';
import { RecipesPage } from '@/pages/RecipesPage';
import { CreateRecipePage } from '@/pages/CreateRecipePage';
import { RecipeDetailsPage } from '@/pages/RecipeDetailsPage';
import { EditRecipePage } from '@/pages/EditRecipePage/EditRecipePage.tsx';

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
    path: '/recipes/:recipeId/edit',
    element: <EditRecipePage />,
  },
  {
    path: '/recipes/create',
    element: <CreateRecipePage />,
  },
]);

export default routes;
