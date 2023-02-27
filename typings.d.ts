import { Url } from "url";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface NewsAndEventsContent extends SanityBody {
  _type: "newsAndEvents";
  order?: number;
  title: string;
  date?: string;
  time?: string;
  url: Url;
  image: Image;
  isNews?: boolean;
}

export interface AboutContent extends SanityBody {
  _type: "aboutContent";
  header: string;
  paragraph: string;
}
