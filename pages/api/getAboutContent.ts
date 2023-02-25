import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { AboutContent } from "../../typings";

const query = groq`*[_type == "aboutContent"]`;

type Data = {
  aboutContent: AboutContent;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aboutContent: AboutContent = await sanityClient.fetch(query);
  res.status(200).json({ aboutContent });
}
