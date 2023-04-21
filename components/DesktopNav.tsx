import Link from "next/link";
import React from "react";

type Props = {};

function DesktopNav({}: Props) {
  return (
    <>
      <nav className="hidden sm:block">
        <ul className="flex" role="menu">
          <li
            className="group pr-16 transition-colors ease-in-out hover:text-white duration-500"
            role="none"
          >
            <Link
              href="#about"
              role="menuItem"
              className="pb-2 border-b-2 border-darkGreen group-hover:border-white ease-in-out duration-500"
            >
              About
            </Link>
          </li>
          <li
            className="group pr-16 transition-colors ease-in-out hover:text-white duration-500"
            role="none"
          >
            <Link
              href="#newsAndEvents"
              role="menuItem"
              className="pb-2 border-b-2 border-darkGreen group-hover:border-white ease-in-out duration-500"
            >
              News & Events
            </Link>
          </li>
          <li
            className="group transition-colors ease-in-out hover:text-white duration-500"
            role="none"
          >
            <Link
              href="#donate"
              role="menuItem"
              className="pb-2 border-b-2 border-darkGreen group-hover:border-white ease-in-out duration-500"
            >
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNav;
