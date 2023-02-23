import React from "react";
import { Bars3Icon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-center text-4xl">Newsaro</h1>
        </Link>
        <div>
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full float-right dark:bg-slate-800">
            <span className="md:display-inline">
              <CodeBracketIcon className="h-6 w-6" />
              Github
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
