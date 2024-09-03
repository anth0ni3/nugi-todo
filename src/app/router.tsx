import {createBrowserRouter} from 'react-router-dom';

import {authRoutes} from './auth/routes';
import RootRoute from './root';
import {todoRoutes} from './todo/routes';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: RootRoute,
    children: [authRoutes, todoRoutes],
  },
]);
