import Head from "next/head";
import Hero from "../components/HomePage/Hero";
import HomeMain from "../components/HomePage/HomeMain";

export default function App() {
  return (
    <>
      {/* <Head>
        <title>Uptogo | The Easiest Way To Study Abroad</title>
        <meta
          name="description"
          content="Uptogo helps Vietnamese students achieve thier dream to study abroad."
        />
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="300char" />
        <meta property="og:url" content="https://www.uptogo.org/" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.uptogo.org/fullLogo.png”"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Lotus Angel Logo of Uptogo" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_GB" />
      </Head> */}
      <div className="md:px-10 my-6 p-4 md:py-10 md:p-0 md:mb-6 bg-white">
        <Hero />
      </div>
      <HomeMain />
    </>
  );
}
