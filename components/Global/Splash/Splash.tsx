import Spline from "@splinetool/react-spline";
import { useAnimationControls, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
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
        delay: 4,
      },
    });
    setTimeout(() => {
      setSplashComplete(true);
    }, 4200);
  };

  return (
    <>
      {!splashComplete && (
        <div className="absolute h-screen w-screen  bg-blueBody">
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
    </>
  );
}
