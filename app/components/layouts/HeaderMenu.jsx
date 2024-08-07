"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../../public/images/boon-logo.png";

const HeaderMenu = () => {
  // スマホメニューの開閉状態を管理するためのstate
  const [isOpen, setIsOpen] = useState(false);
  // スマホメニューの開閉状態を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between	items-center h-16 mt-12 mx-auto max-w-2xl px-6 lg:px-8 text-gray-100">
      <div>
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <Image src={logo} alt="logo" width={60} height={60} />
        </Link>
      </div>
      {/* PC用メニュー */}
      <nav className="hidden sm:block">
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
      {/* スマホ用メニュー */}
      <div className="z-20 relative sm:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-1/2 p-8 h-full bg-gray-800 bg-opacity-80  transition-transform duration-300 ease-in-out z-10 sm:hidden`}
      >
        <ul className="flex flex-col space-y-4 mt-14 font-semibold">
          <li>
            <Link
              href="/about"
              className="px-4 py-2 text-xl text-gray-200"
              onClick={toggleMenu}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="px-4 py-2 text-xl text-gray-200"
              onClick={toggleMenu}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="px-4 py-2 text-xl text-gray-200"
              onClick={toggleMenu}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/gear"
              className="px-4 py-2 text-xl text-gray-200"
              onClick={toggleMenu}
            >
              gear
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMenu;
