import React from "react";

type Props = {};

export default function NewsAndEvents({}: Props) {
  return (
    <section className="bg-paleGreen padding" id="newsAndEvents">
      <h2 className="h2 text-darkGreen">News &amp; Events</h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col w-full mb-12 relative">
          <div className="absolute -left-6 top-8 after:block after:relative after:h-8 after:w-8 after:bottom-4 after:left-2 after:rotate-45 after:bg-lightGreen after:z-0">
            <span className="block relative px-5 pb-3 pt-2 rounded-tr-lg rounded-br-lg bg-mint z-20 font-serif text-darkGreen text-xl shadow">
              Event Tag
            </span>
          </div>
          <img
            src="http://placekitten.com/300/300"
            alt="Placeholder Alt"
            className="mb-4 z-10"
          />
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
        <div className="flex flex-col w-full mb-12 relative">
          <div className="absolute -left-6 top-8 after:block after:relative after:h-8 after:w-8 after:bottom-4 after:left-2 after:rotate-45 after:bg-lightGreen after:z-0">
            <span className="block relative px-5 pb-3 pt-2 rounded-tr-lg rounded-br-lg bg-mint z-20 font-serif text-darkGreen text-xl shadow">
              Event Tag
            </span>
          </div>
          <img
            src="http://placekitten.com/300/300"
            alt="Placeholder Alt"
            className="mb-4 z-10"
          />
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="absolute -left-6 top-8 after:block after:relative after:h-8 after:w-8 after:bottom-4 after:left-2 after:rotate-45 after:bg-lightGreen after:z-0">
            <span className="block relative px-5 pb-3 pt-2 rounded-tr-lg rounded-br-lg bg-mint z-20 font-serif text-darkGreen text-xl shadow">
              Event Tag
            </span>
          </div>
          <img
            src="http://placekitten.com/300/300"
            alt="Placeholder Alt"
            className="mb-4 z-10"
          />
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
      </div>
    </section>
  );
}
