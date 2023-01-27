import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="bg-mint paddingX pt-40 pb-28">
      <h2 className="h2">About our Organization</h2>
      <p className="p text-darkGreen max-w-xl m-auto">
        {
          "Our mission with the Be Kind for Ollie project is to honor Ollie’s life by serving children through education, health, and other human service initiatives. With your help, Ollie's radiant spirit can endure through acts of kindness."
        }
      </p>
    </section>
  );
}
