import Link from "next/link";
import React from "react";
import { BilFacebookCircle } from "@meronex/icons/bi";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="absolute z-10 w-full p-5 sm:px-10 md:px-20 md:py-10 text-mint  uppercase text-xs md:text-sm font-sans font-semibold">
      <div className="flex justify-between items-center max-w-5xl m-auto">
        <MobileNav />
        <DesktopNav />
        <div className="flex items-center  transition-colors ease-in-out hover:text-white duration-400">
          <a
            href="https://www.facebook.com/profile.php?id=100072203140159"
            aria-label="Visit our Facebook Page"
          >
            <BilFacebookCircle size="3em" />
          </a>
          <Link
            href="#contact"
            className="block button ml-4 md:ml-8 font-sans font-bold transition-colors ease-in-out hover:bg-white duration-400"
            aria-label="Send us a Message"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
