import React from "react";
import { BilFacebookCircle } from "@meronex/icons/bi";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-black padding lg:p-28 text-white">
      <div className="max-w-5xl lg:flex lg:m-auto">
        <div className="flex flex-col lg:flex-row lg:w-3/4 items-center mb-12 lg:mb-0">
          <img
            src="/logo.svg"
            alt="Be Kind for Ollie Logo"
            className="max-w-[350px] mb-12 lg:mb-0"
          />
          <div>
            <h4 className="font-serif text-3xl lg:text-2xl text-center lg:text-left tracking-wide mb-6">
              Be Kind for Ollie Foundation
            </h4>
            <div className="font-semibold leading-relaxed text-mint tracking-wider text-center lg:text-left lg:text-sm">
              <p className="mb-4 tracking-wider">
                123 Address Lane <br />
                Evansville, IN 12345 <br />
              </p>
              <a
                href="tel:+7602139494"
                className="tracking-wider transition-colors ease-in-out hover:text-white duration-400"
              >
                (812)111-1111
              </a>{" "}
              <br />
              <a
                className="tracking-wider transition-colors ease-in-out hover:text-white duration-400"
                href="mailto:marionejudy@gmail.com"
              >
                email@email.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-right lg:w-1/4 lg:flex lg:justify-end lg:mt-8">
          <a
            href="https://www.facebook.com/profile.php?id=100072203140159"
            className="text-mint transition-colors ease-in-out hover:text-white duration-400"
            aria-label="Visit our Facebook Page"
          >
            <BilFacebookCircle size="3em" className="m-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
