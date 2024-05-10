import Link from "next/link";
import React from "react";

function HeaderMenu() {
  return (
    <header className="flex justify-between	mx-auto max-w-2xl px-6 lg:px-8 text-white">
      <div>
        <Link href={"/"}>ロゴ</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
          <li>
            <Link href={"/projects"}>projects</Link>
          </li>
          <li>
            <Link href={"/gear"}>gear</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
