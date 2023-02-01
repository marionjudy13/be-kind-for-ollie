import React from "react";
import Image from "next/image";
import eventPic from "../public/cat.jpg";

type Props = {};

export default function NewsAndEvents({}: Props) {
  return (
    <section className="bg-paleGreen padding" id="newsAndEvents">
      <h2 className="h2 text-darkGreen mb-14">News &amp; Events</h2>
      <div className="maxWidth flex flex-wrap justify-center  md:justify-between">
        <div className="card">
          <div className="tag">
            <span className="tagText">Event Tag</span>
          </div>
          <div className="relative h-[275px] mb-4">
            <Image
              src={eventPic}
              alt="Placeholder Alt"
              fill
              style={{ objectFit: "cover", objectPosition: "" }}
            />
          </div>
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
        <div className="card">
          <div className="tag">
            <span className="tagText">Event Tag</span>
          </div>
          <div className="relative h-[275px] mb-4">
            <Image
              src={eventPic}
              alt="Placeholder Alt"
              fill
              style={{ objectFit: "cover", objectPosition: "" }}
            />{" "}
          </div>
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
        <div className="card">
          <div className="tag">
            <span className="tagText">Event Tag</span>
          </div>
          <div className="relative h-[275px] mb-4">
            <Image
              src={eventPic}
              alt="Placeholder Alt"
              fill
              style={{ objectFit: "cover", objectPosition: "" }}
            />
          </div>
          <h3 className="text-xl text-darkGreen font-bold">Event Title</h3>
          <p className="text-lightGreen mb-2">Event Date &amp; Time</p>
          <span className="text-lightGreen font-semibold">See More &gt;</span>
        </div>
      </div>
    </section>
  );
}
