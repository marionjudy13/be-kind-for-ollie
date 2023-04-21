import React from "react";
import { AboutContent } from "@/typings";

export default function About({ header, paragraph }: AboutContent) {
  return (
    <section className="bg-mint paddingX pt-40 pb-36" id="about">
      <h2 className="h2">About our Organization</h2>
      <p className="p text-darkGreen max-w-xl m-auto">{paragraph}</p>
    </section>
  );
}
