import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-darkGreen text-mint flex">
      <nav>
        <ul>
          <li>About</li>
          <li>News & Events</li>
          <li>Donate</li>
        </ul>
      </nav>
      <div>
        <a href="/">Facebook</a>
        <Link href="#contact">Contact</Link>
      </div>
    </header>
  );
}
