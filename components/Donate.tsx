import React from "react";

type Props = {};

export default function Donate({}: Props) {
  return (
    <section className="bg-lightGreen padding" id="donate">
      <h2 className="h2 text-mint">How to Donate</h2>
      <p className="p text-white mb-12">
        {
          "The Be Kind For Ollie Foundation is funded entirely through charitable donations, fund-raising programs, and grants. To donate online, please use one of the following services."
        }
      </p>
      <div className="flex flex-wrap justify-center">
        <img
          src="http://placekitten.com/200/200"
          alt="Placeholder Alt"
          className="mb-12"
        />
        <img
          src="http://placekitten.com/200/200"
          alt="Placeholder Alt"
          className="mb-12"
        />
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
