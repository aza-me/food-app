import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecipesPage } from '@/pages/RecipesPage/RecipesPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RecipesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
