import { NewsAndEvents } from "../typings";

export const fetchNewsAndEvents = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNewsAndEvents`
  );

  const data = await res.json();
  const newsAndEvents: NewsAndEvents = data.newsAndEvents;

  console.log("fetching, newsAndEvents");

  return newsAndEvents;
};
