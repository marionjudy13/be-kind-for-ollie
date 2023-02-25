import React from "react";
import { AboutContent } from "@/typings";

export default function About({ header, paragraph }: AboutContent) {
  return (
    <section
      className="bg-mint paddingX pt-40 md:pt-60 pb-28 md:pb-34 lg:padding"
      id="about"
    >
      <div className="maxWidth">
        <h2 className="h2">{header}</h2>
        <p className="p text-darkGreen lg:px-20">{paragraph}</p>
      </div>
    </section>
  );
}
