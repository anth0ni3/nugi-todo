import React from 'react';
import {replace, RouteObject} from 'react-router-dom';

const TodoLayout = React.lazy(() =>
  import('./components/layout').then(module => ({
    default: module.TodoLayout,
  }))
);

async function todoLoader() {
  const sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    return replace('/auth/login');
  }
  return null;
}

export const todoRoutes: RouteObject = {
  Component: TodoLayout,
  loader: todoLoader,
  children: [
    {
      index: true,
      lazy: () => import('./routes/_index'),
    },
    {
      path: 'about',
      lazy: () => import('./routes/about'),
    },
  ],
};
