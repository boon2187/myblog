import Link from "next/link";
import React from "react";

function HeaderMenu() {
  return (
    <header className="flex justify-between	items-center h-16 mt-6 mx-auto max-w-2xl px-6 lg:px-8 text-gray-100">
      <div>
        <Link href={"/"}>ロゴ</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="px-4">
            <Link href={"/about"}>about</Link>
          </li>
          <li className="px-4">
            <Link href={"/blog"}>blog</Link>
          </li>
          <li className="px-4">
            <Link href={"/projects"}>projects</Link>
          </li>
          <li className="px-4">
            <Link href={"/gear"}>gear</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
