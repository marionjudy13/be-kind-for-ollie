import Link from "next/link";
import React from "react";
import { BilFacebookCircle } from "@meronex/icons/bi";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="absolute w-full p-5 sm:px-10 md:px-20 md:py-10 text-mint  uppercase text-xs font-sans font-semibold">
      <div className="flex justify-between items-center max-w-5xl m-auto">
        <MobileNav />
        <DesktopNav />
        <div className="flex items-center">
          <a href="https://www.facebook.com/profile.php?id=100072203140159">
            <BilFacebookCircle size="3em" />
          </a>
          <Link
            href="#contact"
            className="block bg-mint text-darkGreen font-bold text-sm px-3 py-2 rounded-xl ml-5"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
