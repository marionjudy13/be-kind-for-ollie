import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:url" content="https://www.bekindforollie.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Be Kind for Ollie"
        />
        <meta
          property="og:description"
          content="Be Kind For Ollie"
        />
        <meta property="og:image" content="/homepage.webp" />
      </Head>
      <body className="bg-darkGreen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
