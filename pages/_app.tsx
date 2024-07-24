import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/styles.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="author" content="Emmanuel Okpunor" />
        <meta
          name="description"
          content="Emmanuel Okpunor, a frontend web developer specialised in responsive design using HTML5, CSS3, JavaScript and React."
        />
        <meta
          name="keywords"
          content="web, developer, frontend, coding, programmer, html/css, javascript, react, portfolio, development,design,Nigeria,web design, web developer, website builder, web development, website design in nigeria,front-end developer, front-end developer, front-end developer for hire, front-end developer Nigeria,responsive web design, "
        />

        <link href="https://emmanuelokp.com/" rel="canonical" />
        <meta name="theme-color" content="#3700b3" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#3700b3" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Emmanuel Okpunor — Frontend Devloper"
        />
        <meta property="og:url" content="https://www.emmanuelokp.com/" />
        <meta property="og:image" content="/portfolio-home.jpg" />
        <meta
          property="og:description"
          content="Emmanuel Okpunor, a frontend web developer specialised in responsive design using HTML5, CSS3, JavaScript and React."
        />
        <meta
          name="twitter:title"
          content="Emmanuel Okpunor — Frontend Devloper"
        />
        <meta
          name="twitter:description"
          content="Emmanuel Okpunor, a frontend web developer specialised in responsive design using HTML5, CSS3, JavaScript and React."
        />
        <meta name="twitter:image" content="/portfolio-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.emmanuelokp.com/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <title>Emmanuel Okpunor - Frontend Developer </title>
      </Head>
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
