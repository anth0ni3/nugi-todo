import React from 'react';
import {RouteObject} from 'react-router-dom';

const AuthLayout = React.lazy(() =>
  import('./components/layout').then(module => ({default: module.AuthLayout}))
);

export const authRoutes: RouteObject = {
  path: 'auth',
  Component: AuthLayout,
  children: [
    // {
    //   index: true,
    //   loader: () => replace('/auth/login'),
    // },
    {
      path: 'login',
      lazy: () => import('./routes/login'),
    },
  ],
};
