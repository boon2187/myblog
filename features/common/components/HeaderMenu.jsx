import Link from "next/link";
import React from "react";

function HeaderMenu() {
  return (
    <div className="text-white">
      <header>
        <div>
          <Link href={"/"}>ロゴ</Link>
        </div>
        <nav>
          <ul>
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
    </div>
  );
}

export default HeaderMenu;
