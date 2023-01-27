import React from "react";
import { BilFacebookCircle } from "@meronex/icons/bi";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-black padding text-white">
      <div className="border-2 border-white">
        <div className="border-2 border-pink flex flex-col">
          <img
            src="/logo.svg"
            alt="Be Kind for Ollie Logo"
            className="max-w-[350px]"
          />
          <h4>Be Kind for Ollie Foundation</h4>
          <p>
            123 Address Lane <br />
            Evansville, IN 12345 <br />
          </p>
          <a href="/">(812) 111-1111</a>
          <a href="/">email@email.com</a>
        </div>
        <div className="border-2 border-purple">
          <a href="https://www.facebook.com/profile.php?id=100072203140159">
            <BilFacebookCircle size="3em" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
