import { NewsAndEventsContent } from "../typings";

export const fetchNewsAndEventsContent = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNewsAndEventsContent`
  );

  const data = await res.json();
  const newsAndEventsContent: NewsAndEventsContent = data.newsAndEvents;

  console.log("fetching, newsAndEventsContent");

  return newsAndEventsContent;
};
