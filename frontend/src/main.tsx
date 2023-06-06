import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routes from '@/app/routes.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/app/themes/theme.ts';
import '@/assets/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
