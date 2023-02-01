import Link from "next/link";
import React from "react";

type Props = {};

function DesktopNav({}: Props) {
  return (
    <>
      <nav className="hidden sm:block">
        <ul className="flex" role="menu">
          <li
            className="pr-16 transition-colors ease-in-out hover:text-white duration-400"
            role="none"
          >
            <Link href="#about" role="menuItem">
              About
            </Link>
          </li>
          <li
            className="pr-16 transition-colors ease-in-out hover:text-white duration-400"
            role="none"
          >
            <Link href="#newsAndEvents" role="menuItem">
              News & Events
            </Link>
          </li>
          <li
            className="transition-colors ease-in-out hover:text-white duration-400"
            role="none"
          >
            <Link href="#donate" role="menuItem">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNav;
