import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/task-manager",
      name: "Task Manager",
    },
    {
      path: "/profile",
      name: "Profile",
    },
    {
      path: "/settings",
      name: "Settings",
    },
  ];

  return (
    <nav className="bg-blue-500 text-white p-4 w-full">
      <ul className="flex">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.name} className="px-5 text-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold" : undefined
                }
                to={navLink.path}
              >
                {navLink.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
