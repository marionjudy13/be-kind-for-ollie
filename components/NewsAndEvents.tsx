/* eslint-disable @next/next/no-img-element */
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../sanity";
import { NewsAndEventsContent } from "@/typings";
import dayjs from "dayjs";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

export default function NewsAndEventsSection({
  newsAndEvents,
}: {
  newsAndEvents: NewsAndEventsContent[];
}) {
  return (
    <section className="bg-paleGreen padding" id="newsAndEvents">
      <h2 className="h2 text-darkGreen mb-14 lg:mb-20">News &amp; Events</h2>
      <div className="maxWidth flex flex-wrap justify-center  md:justify-between">
        {newsAndEvents.map((event) => (
          <div key={event._id} className="card group">
            <a
              href={event.url}
              className="ease-in-out duration-300 md:group-hover:scale-[103%] transform-gpu"
            >
              <div className="tag">
                {event.isNews ? (
                  <span className="tagText">News</span>
                ) : (
                  <span className="tagText">Event</span>
                )}
              </div>
              <div
                className="relative h-[275px] lg:h-[350px] mb-4"
                style={{
                  backgroundImage: `url('${urlFor(event.image)
                    .height(400)
                    .fit("fill")}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h3 className="text-xl text-darkGreen font-bold">
                {event.title}
              </h3>
              <p className="text-lightGreen mb-2 inline-block">
                {dayjs(event.date).format("MMMM D, YYYY")}
              </p>
              {event.time && (
                <p className="text-lightGreen inline-block">
                  <span className="mx-3 font-bold text-lightGreen">
                    &#8226;
                  </span>
                  {event.time}
                </p>
              )}
              <span className="block ease-in-out duration-300 text-lightGreen group-hover:text-darkGreen font-semibold">
                See More{" "}
                <span className="ease-in-out duration-300 group-hover:ml-3">
                  &gt;
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
