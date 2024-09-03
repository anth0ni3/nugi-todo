import {Provider} from 'react-redux';
import {Outlet, ScrollRestoration} from 'react-router-dom';

import Store from '~/lib/store';

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
