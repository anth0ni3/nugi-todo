import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {router} from './app/router';

import '~/styles/global.css';

const delayedRouter = () => router;

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const {worker} = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={delayedRouter()} />
    </StrictMode>
  );
});
