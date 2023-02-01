import React from "react";

type Props = {};

export default function Donate({}: Props) {
  return (
    <section className="bg-lightGreen padding" id="donate">
      <div className="maxWidth">
        <h2 className="h2 text-mint">How to Donate</h2>
        <p className="p text-white mb-12 lg:mb-16">
          {
            "The Be Kind For Ollie Foundation is funded entirely through charitable donations, fund-raising programs, and grants. To donate online, please use one of the following services."
          }
        </p>
        <div className="flex flex-wrap justify-center m-auto max-w-[80%] lg:max-w-[700px] md:justify-between">
          <img
            src="/paypal.jpg"
            alt="Placeholder Alt"
            className="w-full h-auto mb-16 md:mb-12 md:w-[40%] lg:w-[45%] lg:max-w-[300px] lg:mb-16"
          />
          <img
            src="/venmo.jpg"
            alt="Placeholder Alt"
            className="w-full h-auto mb-12 md:w-[40%] lg:max-w-[300px] lg:w-[45%] lg:mb-16"
          />
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
