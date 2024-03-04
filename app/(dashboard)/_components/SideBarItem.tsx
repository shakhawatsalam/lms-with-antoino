"use client";

import { LucideIcon } from "lucide-react";

interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SideBarItem = ({ icon, label, href }: SideBarItemProps) => {
  return <div>SideBarItem</div>;
};

export default SideBarItem;
