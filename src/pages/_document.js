import { Html, Head, Main, NextScript } from "next/document";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
