/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export default function Donate({}: Props) {
  return (
    <section className="bg-lightGreen padding" id="donate">
      <div className="maxWidth">
        <h2 className="h2 text-mint">How to Donate</h2>
        <p className="p text-white mb-12 lg:mb-16">
          {
            "The Be Kind For Ollie Foundation is funded entirely through charitable donations, fund-raising programs, and grants. To donate online, please use our Venmo account."
          }
        </p>
        <div className="flex flex-wrap justify-center m-auto max-w-[80%] lg:max-w-[700px]">
          <a
            href="https://account.venmo.com/u/bekindforollie"
            target="_blank"
            rel="noreferrer"
            className="w-full hover:scale-105 ease-in-out duration-300"
          >
            <img
              src="/bekind-venmo.jpg"
              alt="Placeholder Alt"
              className="w-full h-auto m-auto md:w-[40%] lg:max-w-[250px] lg:w-[45%] lg:mb-16"
            />
          </a>
        </div>
        <p className="p text-white mb-12">
          {
            "To mail a donation to the Be Kind For Ollie Foundation, the following address may be used.  Please make checks payable to ‘Be Kind for Ollie Foundation’."
          }
        </p>
        <p className="p font-semibold text-white">
          Be Kind For Ollie Foundation
          <br />
          123 Address Lane
          <br />
          Evansville, IN 12345
        </p>
      </div>
    </section>
  );
}
