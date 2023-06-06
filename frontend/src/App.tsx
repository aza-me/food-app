import { FC } from 'react';
import { store } from '@/store/store.ts';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/app/themes/theme.ts';
import { RouterProvider } from 'react-router-dom';
import routes from '@/app/routes.tsx';
import { Provider } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

export const App: FC = () => {
  const methods = useForm();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FormProvider {...methods}>
          <RouterProvider router={routes} />
        </FormProvider>
      </ThemeProvider>
    </Provider>
  );
};
