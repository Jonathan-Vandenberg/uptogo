import "../styles/input.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Global/Navbars/Navbar";
import SideNavModal from "../components/Global/Navbars/SideNavModal";
import Footer from "../components/Global/Navbars/Footer/Footer";
import Loading3D from "../components/UI/Loading3D";
import { motion, useAnimationControls } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [splashComplete, setSplashComplete] = useState(false);
  const controls = useAnimationControls();
  const controlsBody = useAnimationControls();

  const handleLoad = () => {
    controls.start({
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 4,
      },
    });
    controlsBody.start({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 4,
      },
    });
    setTimeout(() => {
      setSplashComplete(true);
    }, 4200);
  };

  return (
    <div className="relative bg-blueBody">
      <NextNProgress color="rgb(248,149,41)" height={1} />
      {!splashComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          className="z-50 absolute top-0 left-1/2 transform -translate-x-1/2"
        >
          <Spline
            onLoad={handleLoad}
            scene="https://prod.spline.design/gg0modFcZyGWPqfY/scene.splinecode"
          />
        </motion.div>
      )}
      <motion.div initial={{ opacity: 0 }} animate={controlsBody}>
        <Navbar />
        <SideNavModal />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </div>
  );
}

export default MyApp;
