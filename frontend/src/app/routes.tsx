import { createBrowserRouter } from 'react-router-dom';
import { RecipesPage } from '@/pages/RecipesPage';
import { CreateRecipePage } from '@/pages/CreateRecipePage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RecipesPage />,
  },
  {
    path: '/recipes/create',
    element: <CreateRecipePage />,
  },
]);

export default routes;
