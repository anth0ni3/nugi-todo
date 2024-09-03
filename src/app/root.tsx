import {Provider} from 'react-redux';
import {Outlet, redirect, replace, ScrollRestoration} from 'react-router-dom';

import Store from '~/lib/store';

import {getAllTodos} from './todo/utils/api-funcs';

export default function RootRoute() {
  return (
    <Provider store={Store}>
      <div className="min-h-dvh bg-bgColor-muted px-4 py-8">
        <Outlet />
      </div>
      <ScrollRestoration />
    </Provider>
  );
}

export async function rootLoader() {
  // TODO: remove this and set sessionId in the backend
  const sessionId = localStorage.getItem('sessionId');
  console.log('sessionId', sessionId);
  if (!sessionId) throw redirect('/auth/login');

  if (!localStorage.getItem('todos')) {
    await getAllTodos();
  }
  return null;
}
