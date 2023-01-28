import React from "react";
import { BilFacebookCircle } from "@meronex/icons/bi";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-black padding text-white">
      <div>
        <div className="flex flex-col items-center  mb-12">
          <img
            src="/logo.svg"
            alt="Be Kind for Ollie Logo"
            className="max-w-[350px] mb-12"
          />
          <h4 className="font-serif text-3xl text-center tracking-wide mb-6">
            Be Kind for Ollie Foundation
          </h4>
          <div className="font-semibold leading-relaxed text-mint tracking-wider text-center">
            <p className="mb-4">
              123 Address Lane <br />
              Evansville, IN 12345 <br />
            </p>
            <a href="tel:+7602139494">(812)111-1111</a> <br />
            <a href="mailto:marionejudy@gmail.com">email@email.com</a>
          </div>
        </div>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100072203140159"
            className="text-mint"
          >
            <BilFacebookCircle size="3em" className="m-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
