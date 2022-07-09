import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Personal Web Resources | JoshJosh </title>
        <meta name="title" content="Personal Web Resources | Joshua Pautanes" />
        <meta
          name="description"
          content="My Personal roadmap and guide to learn and study web development. Contains Links, websites and sample projects"
        />
        <meta name="keywords" content="Web Resources, joshjoshuap, Joshua Pautanes" />
        <meta name="author" content="Joshua Pautanes" />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
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
