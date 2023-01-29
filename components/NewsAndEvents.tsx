import React from "react";

type Props = {};

export default function NewsAndEvents({}: Props) {
  return (
    <section className="bg-paleGreen padding" id="newsAndEvents">
      <h2 className="h2 text-darkGreen">News &amp; Events</h2>
      <div className="flex flex-wrap mt-8 m-auto justify-center maxWidth">
        <div className="card">
          <div className="tag">
            <span className="tagText">Event Tag</span>
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
        <div className="card">
          <div className="tag">
            <span className="tagText">Event Tag</span>
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
        <div className="card mb-0">
          <div className="tag">
            <span className="tagText">Event Tag</span>
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
