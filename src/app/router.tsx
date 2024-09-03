import {createBrowserRouter} from 'react-router-dom';

import {authRoutes} from './auth/routes';
import RootRoute, {rootLoader} from './root';
import {todoRoutes} from './todo/routes';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: RootRoute,
    loader: rootLoader,
    children: [authRoutes, todoRoutes],
  },
]);
