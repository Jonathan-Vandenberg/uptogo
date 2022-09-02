import "../styles/input.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Global/Navbars/Navbar";
import SideNavModal from "../components/Global/Navbars/SideNavModal";
import Footer from "../components/Global/Navbars/Footer/Footer";
import Loading3D from "../components/UI/Loading3D";
import { motion, useAnimationControls } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const controls = useAnimationControls();
  const controlsBody = useAnimationControls();

  controls.start({
    opacity: 0,
    transition: {
      delay: 4,
    },
  });

  controlsBody.start({
    opacity: 1,
    transition: {
      delay: 4.1,
    },
  });

  return (
    <div className="realtive">
      <motion.div initial={{ opacity: 1 }} animate={controls}>
        <Loading3D />
      </motion.div>
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
