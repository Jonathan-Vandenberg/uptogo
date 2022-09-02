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
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const controls = useAnimationControls();
  const controlsBody = useAnimationControls();

  const handleLoad = () => {
    setLoadingSpinner(false);
    controls.start({
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 3.8,
      },
    });
    setTimeout(() => {
      setSplashComplete(true);
      controlsBody.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }, 4200);
  };

  const styles = splashComplete ? "" : "bg-blueBody h-screen w-screen";

  return (
    <div className={styles}>
      <NextNProgress color="rgb(248,149,41)" height={1} />
      {!splashComplete && (
        <div className="relative h-screen w-screen">
          {!splashComplete && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={controls}
              className="z-50 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <Spline
                onLoad={handleLoad}
                scene="https://prod.spline.design/gg0modFcZyGWPqfY/scene.splinecode"
              />
            </motion.div>
          )}
          {loadingSpinner && (
            <div
              role="status"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      )}
      <motion.div initial={{ opacity: 0 }} animate={controlsBody}>
        {splashComplete && (
          <>
            <Navbar />
            <SideNavModal />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </motion.div>
    </div>
  );
}

export default MyApp;
