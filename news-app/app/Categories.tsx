"use client";

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";
categories;

function Categories() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl border-1">
      {categories.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default Categories;
