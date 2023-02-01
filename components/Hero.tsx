import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import oliver from "../public/oliver.jpg";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="flex flex-wrap justify-center bg-darkGreen paddingX pt-32 md:pt-44">
      <div className="maxWidth m-auto mb-16 lg:w-1/2">
        <div className="relative flex justify-center lg:justify-start mb-7 md:mb-14">
          <Image src={logo} alt="Placeholder Alt" width={400} />
        </div>
        <h1 className="font-serif text-4xl m-auto md:text-5xl md:max-w-xl leading-tight md:leading-[1.25] text-center lg:text-left text-white mb-7 md:mb-10">
          Be Kind for Ollie Foundation
        </h1>
        <p className="text-center lg:text-left text-xl md:text-2xl text-mint leading-normal md:leading-relaxed md:mb-1">
          Be Kind for Ollie serves children through education, health, and other
          human service&nbsp;initiatives.
        </p>
      </div>
      <div className="-mb-24 md:-mb-40 lg:mb-0 lg:w-1/2">
        <div className="relative border-8 border-mint m-auto">
          <Image
            src={oliver}
            alt="Placeholder Alt"
            style={{ margin: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
