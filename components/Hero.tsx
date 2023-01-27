import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="bg-darkGreen paddingX pt-32">
      <div className="max-w-md m-auto mb-16">
        <img
          src="/logo.svg"
          alt="Be Kind for Ollie Logo"
          className="max-w-[400px] m-auto mb-7"
        />
        <h1 className="font-serif text-4xl leading-tight text-center text-white mb-7">
          Be Kind for Ollie Foundation
        </h1>
        <p className="text-center text-xl text-mint leading-normal">
          Be Kind for Ollie serves children through education, health, and other
          human service initiatives.
        </p>
      </div>
      <div className="-mb-20">
        <img
          src="/oliver.jpg"
          alt="Oliver Dill smiling and leaning against a fence."
          className="border-8 border-mint m-auto"
        />
      </div>
    </section>
  );
}
