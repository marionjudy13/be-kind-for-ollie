import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="bg-darkGreen p-20">
      <div>
        <img src="/logo.svg" alt="Be Kind for Ollie Logo" />
      </div>
      <div>
        <img
          src="/oliver.jpg"
          alt="Oliver Dill smiling and leaning against a fence."
        />
      </div>
    </div>
  );
}
