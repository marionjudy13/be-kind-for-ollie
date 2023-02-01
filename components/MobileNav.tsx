import React from "react";
import { useState } from "react";
import { HiMenu } from "@meronex/icons/hi";
import { MdcWindowClose } from "@meronex/icons/mdc";
import { BilFacebookCircle } from "@meronex/icons/bi";
import Link from "next/link";

type Props = {};

export default function MobileNav({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Yup!");
  };

  return (
    <>
      <HiMenu onClick={toggleMenu} size="3em" className="sm:hidden" />
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col absolute top-0 left-0 w-full bg-mint text-darkGreen shadow-lg shadow-black`}
      >
        <div className="flex justify-between p-5">
          <MdcWindowClose size="3em" onClick={toggleMenu} />
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100072203140159"
              aria-label="Visit our Facebook Page"
            >
              <BilFacebookCircle size="3em" />
            </a>
            <Link
              onClick={toggleMenu}
              href="#contact"
              className="block bg-darkGreen text-mint button ml-4 font-sans font-bold"
              aria-label="Send us a Message"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <ul
          className="flex flex-col items-center w-full text-center text-base font-bold"
          role="menu"
        >
          <li className="p-8 w-full border border-x-0" role="none">
            <Link href="#about" onClick={toggleMenu} role="menuItem">
              About
            </Link>
          </li>
          <li className="p-8 w-full border border-t-0 border-x-0" role="none">
            <Link href="#newsAndEvents" onClick={toggleMenu} role="menuItem">
              News & Events
            </Link>
          </li>
          <li className="p-8 w-full border border-t-0 border-x-0" role="none">
            <Link href="#donate" onClick={toggleMenu} role="menuItem">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
