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
        } flex-col absolute top-0 left-0 w-full bg-mint text-darkGreen`}
      >
        <div className="flex justify-between p-5">
          <MdcWindowClose size="3em" onClick={toggleMenu} />
          <div className="flex items-center">
            <a href="https://www.facebook.com/profile.php?id=100072203140159">
              <BilFacebookCircle size="3em" />
            </a>
            <Link
              href="#contact"
              className="block bg-darkGreen text-mint px-4 py-2.5 rounded-xl ml-5"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <ul className="flex flex-col items-center w-full text-center">
          <li className="p-5 w-full border border-x-0">About</li>
          <li className="p-5 w-full border border-t-0 border-x-0">
            News & Events
          </li>
          <li className="p-5 w-full border border-t-0 border-x-0">Donate</li>
        </ul>
      </nav>
    </>
  );
}
