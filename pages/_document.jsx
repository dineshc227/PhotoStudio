import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="PhotoStudio — Bengaluru's premier photography & cinematography studio. Wedding, drone, events, product, and cinematic videography." />
        <meta name="keywords" content="photography studio bengaluru, wedding photographer, drone shoot, cinematic video, product photography, event photography" />
        <meta name="author" content="PhotoStudio" />

        {/* Open Graph */}
        <meta property="og:title" content="PhotoStudio — Capturing Moments, Creating Memories" />
        <meta property="og:description" content="Bengaluru's most awarded photography & cinematography studio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photostudio.in" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhotoStudio" />
        <meta name="twitter:description" content="Capturing Moments, Creating Memories — Premium studio in Bengaluru." />

        {/* Favicon placeholder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
