import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Playfair_Display } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${playfair_display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
