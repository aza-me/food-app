import { createBrowserRouter } from 'react-router-dom';
import { RecipesPage } from '@/pages/RecipesPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RecipesPage />,
  },
]);

export default routes;
