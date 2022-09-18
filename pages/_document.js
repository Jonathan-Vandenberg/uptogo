import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi-VN">
      <Head>
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta charSet="utf-8" />
        <meta name="author" content="Jonathan van den Berg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Uptogo helps you study abroad" />
        <meta name="keywords" content="Study, Abroad, Education" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
