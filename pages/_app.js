import '../styles/main.css';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Personal Web Resources | JoshJosh </title>

        <meta name="title" content="Web Dev Resources | Josh Joshua" />
        <meta
          name="description"
          content="My personal list of resources and developer tools to build and learn web development.
          Contains Documentation, websites, links and guides."
        />
        <meta name="keywords" content="Web Resources, joshjoshuap, Joshua Pautanes" />
        <meta name="author" content="Joshua Pautanes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
