import React from "react";
import { AboutContent } from "@/typings";

export default function About({}: AboutContent) {
  return (
    <section
      className="bg-mint paddingX pt-40 md:pt-60 pb-28 md:pb-34 lg:padding"
      id="about"
    >
      <div className="maxWidth">
        <h2 className="h2">About our Organization</h2>
        <p className="p text-darkGreen lg:px-20">
          {
            "Our mission with the Be Kind for Ollie project is to honor Ollie’s life by serving children through education, health, and other human service initiatives. With your help, Ollie's radiant spirit can endure through acts of kindness."
          }
        </p>
      </div>
    </section>
  );
}
