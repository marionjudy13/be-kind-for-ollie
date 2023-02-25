/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="block relative z-0 bg-darkGreen paddingX pt-32 md:pt-40 lg:bottomPadding">
      <div className="flex flex-wrap justify-center lg:justify-between maxWidth">
        <div className="m-auto mb-16 lg:mb-0 lg:w-1/2 lg:max-w-none">
          <img
            src="/logo.svg"
            alt="Be Kind for Ollie Logo"
            className="max-w-[400px] m-auto mb-7 md:mb-10 lg:m-0 lg:mb-10 lg:mt-0"
          />
          <h1 className="font-serif text-4xl lg:text-5xl lg:tracking-wide m-auto md:max-w-md leading-tight md:leading-[1.25] text-center lg:text-left text-white mb-7 lg:ml-0">
            Be Kind for Ollie Foundation
          </h1>
          <p className="text-center lg:text-left text-lg lg:text-xl text-mint leading-normal md:leading-relaxed  md:max-w-lg md:mb-6 lg:mb-0">
            Be Kind for Ollie serves children through education, health, and
            other human service&nbsp;initiatives.
          </p>
        </div>
        <div className="relative -mb-24 md:-mb-40 lg:mb-0 lg:w-1/2">
          <span className="background">
            <img
              src="/oliver.webp"
              alt="Photo of Oliver Dill"
              className="relative z-10 border-8 border-mint lg:h-full lg:w-full lg:min-w-full lg:border-none"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
