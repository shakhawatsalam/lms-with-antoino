"use client";

import { Compass, Layout } from "lucide-react";
import SideBarItem from "./SideBarItem";

const gustRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SideBarRoutes = () => {
  const routes = gustRoutes;
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SideBarRoutes;