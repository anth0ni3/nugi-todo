import { NavLink, Outlet } from "react-router-dom";
import { cn } from "~/utils/cn";

const links = [
  {
    to: "/",
    label: "Todos",
  },
  {
    to: "/about",
    label: "About",
  },
];

export function TodoLayout() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <section className="flex gap-4">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                "button button-link button-sm text-fgColor-muted font-normal hover:no-underline",
                isActive &&
                  "text-fgColor-black font-medium underline-offset-4 underline hover:underline"
              )
            }
            key={link.to}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </section>
      <section className="card p-5">
        <Outlet />
      </section>
    </div>
  );
}
