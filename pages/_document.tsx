import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" href="/img/icons/logo.svg" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
