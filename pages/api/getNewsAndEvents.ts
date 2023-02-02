import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { NewsAndEvents } from "../../typings";

const query = groq`*[_type == "newsAndEvents"]`;

type Data = {
  newsAndEvents: NewsAndEvents;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const newsAndEvents: NewsAndEvents = await sanityClient.fetch(query);
  res.status(200).json({ newsAndEvents });
}
