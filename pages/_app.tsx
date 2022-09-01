import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Global/Navbars/Navbar";
import SideNavModal from "../components/Global/Navbars/SideNavModal";
import Footer from "../components/Global/Navbars/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SideNavModal />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
