import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { NewsAndEventsContent } from "../../typings";

const query = groq`*[_type == "newsAndEvents"]`;

type Data = {
  newsAndEvents: NewsAndEventsContent;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const newsAndEvents: NewsAndEventsContent = await sanityClient.fetch(query);
  res.status(200).json({ newsAndEvents });
}
