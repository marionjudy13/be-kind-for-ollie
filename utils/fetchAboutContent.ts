// This function is reaching out to next.js api to get the sanity info

import { AboutContent } from "../typings";

export const fetchAboutContent = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutContent`
  );

  const data = await res.json();
  const aboutContent: AboutContent = data.aboutContent;

  console.log("fetching, aboutContent");

  return aboutContent;
};
