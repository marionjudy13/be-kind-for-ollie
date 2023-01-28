import Link from "next/link";
import React from "react";

type Props = {};

function DesktopNav({}: Props) {
  return (
    <>
      <nav className="hidden sm:block">
        <ul className="flex">
          <li className="pr-16">
            <Link href="#about">About</Link>
          </li>
          <li className="pr-16">
            <Link href="#newsAndEvents">News & Events</Link>
          </li>
          <li>
            <Link href="#donate">Donate</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNav;
