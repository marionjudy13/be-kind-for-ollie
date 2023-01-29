import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="flex flex-wrap justify-center bg-darkGreen paddingX pt-32 md:pt-44">
      <div className="maxWidth m-auto mb-16 lg:w-1/2">
        <img
          src="/logo.svg"
          alt="Be Kind for Ollie Logo"
          className="max-w-[400px] m-auto mb-7 md:mb-14"
        />
        <h1 className="font-serif text-4xl m-auto md:text-5xl md:max-w-xl leading-tight md:leading-[1.25] text-center text-white mb-7 md:mb-10">
          Be Kind for Ollie Foundation
        </h1>
        <p className="text-center text-xl md:text-2xl text-mint leading-normal md:leading-relaxed md:mb-1">
          Be Kind for Ollie serves children through education, health, and other
          human service initiatives.
        </p>
      </div>
      <div className="-mb-20 md:-mb-40 lg:mb-0 lg:w-1/2">
        <img
          src="/oliver.jpg"
          alt="Oliver Dill smiling and leaning against a fence."
          className="border-8 border-mint m-auto"
        />
      </div>
    </section>
  );
}
