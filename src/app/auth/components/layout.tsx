import {Outlet} from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col justify-center">
      <div className="card mx-auto w-full max-w-md p-5">
        <Outlet />
      </div>
    </div>
  );
}
