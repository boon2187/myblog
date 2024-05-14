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
        <ul className="flex space-x-4 font-semibold">
          <li>
            <Link
              href={"/about"}
              className="hover:bg-gray-800 rounded-md px-4 py-2"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className="hover:bg-gray-800 rounded-md px-4 py-2"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="hover:bg-gray-800 rounded-md px-4 py-2"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href={"/gear"}
              className="hover:bg-gray-800 rounded-md px-4 py-2"
            >
              gear
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
