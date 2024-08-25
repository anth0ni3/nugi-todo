import {Outlet} from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="card mx-auto max-w-sm p-5">
      <Outlet />
    </div>
  );
}
