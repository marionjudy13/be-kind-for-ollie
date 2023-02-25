import React from "react";
import Image from "next/image";
import eventPic from "../public/cat.jpg";
import { NewsAndEventsContent } from "@/typings";
import dayjs from "dayjs";

export default function NewsAndEventsSection({
  newsAndEvents,
}: {
  newsAndEvents: NewsAndEventsContent[];
}) {
  console.log(newsAndEvents);
  return (
    <section className="bg-paleGreen padding" id="newsAndEvents">
      <h2 className="h2 text-darkGreen mb-14 lg:mb-20">News &amp; Events</h2>
      <div className="maxWidth flex flex-wrap justify-center  md:justify-between">
        {newsAndEvents.map((event) => (
          <div key={event._id} className="card">
            <div className="tag">
              <span className="tagText">Event Tag</span>
            </div>
            <div className="relative h-[275px] lg:h-[350px] mb-4">
              <Image
                src={eventPic}
                alt="Placeholder Alt"
                fill
                style={{ objectFit: "cover", objectPosition: "" }}
              />
            </div>
            <h3 className="text-xl text-darkGreen font-bold">{event.title}</h3>
            <p className="text-lightGreen mb-2">
              {dayjs(event.date).format("MMMM D, YYYY")}
            </p>
            <span className="text-lightGreen font-semibold">See More &gt;</span>
          </div>
        ))}
      </div>
    </section>
  );
}
