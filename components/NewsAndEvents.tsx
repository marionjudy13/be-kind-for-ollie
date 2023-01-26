import React from "react";

type Props = {};

export default function NewsAndEvents({}: Props) {
  return (
    <section className="bg-paleGreen padding">
      <h2 className="h2 text-darkGreen">News &amp; Events</h2>
      <div className="flex justify-center">
        <div className="flex flex-col relative">
          <div className="absolute left-0 top-5 px-5 py-3 bg-mint">
            Event Tag
          </div>
          <img
            src="http://placekitten.com/300/300"
            alt="Placeholder Alt"
            className="mb-4"
          />
          <h3 className="text-xl text-darkGreen font-bold mb-2">Event Title</h3>
          <p className="text-lightGreen font-semibold mb-1">
            Event Date & Time
          </p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
      </div>
    </section>
  );
}
