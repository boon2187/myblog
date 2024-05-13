import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderMenu() {
  return (
    <header className="flex justify-between	items-center h-16 mt-6 mx-auto max-w-2xl px-6 lg:px-8 text-gray-100">
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/boon-logo.png"}
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 font-semibold [&>li]:px-4 [&>li]:py-2">
          <li className="hover:bg-gray-800 rounded-md">
            <Link href={"/about"}>about</Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md">
            <Link href={"/blog"}>blog</Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md">
            <Link href={"/projects"}>projects</Link>
          </li>
          <li className="hover:bg-gray-800 rounded-md">
            <Link href={"/gear"}>gear</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
