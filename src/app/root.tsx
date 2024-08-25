import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {Outlet, replace, ScrollRestoration} from 'react-router-dom';

import {api} from '../services';

export default function RootRoute() {
  return (
    <ApiProvider api={api}>
      <div className="min-h-dvh bg-bgColor-muted px-4 py-8">
        <Outlet />
      </div>
      <ScrollRestoration />
    </ApiProvider>
  );
}

export function rootLoader() {
  // TODO: remove this and set sessionId in the backend
  const sessionId = localStorage.getItem('fg') || 'kkk';
  if (!sessionId)
    return replace('/auth/login', {
      status: 401,
      statusText: 'Unauthorized',
    });
  return null;
}
