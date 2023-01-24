import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="absolute w-full px-20 py-10 max-w-5xl m-auto text-mint flex justify-between items-center uppercase text-xs font-sans font-semibold">
      <nav>
        <ul className="flex ">
          <li className="pr-16">About</li>
          <li className="pr-16">News & Events</li>
          <li>Donate</li>
        </ul>
      </nav>
      <div className="flex items-center">
        <a href="/">Facebook</a>
        <Link
          href="#contact"
          className="block bg-mint text-darkGreen px-4 py-2"
        >
          <span>Contact</span>
        </Link>
      </div>
    </header>
  );
}
