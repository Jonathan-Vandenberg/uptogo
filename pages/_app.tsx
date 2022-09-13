import "../src/input.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "../lib/client";
import Navbar from "../components/Global/Navbars/Navbar";
import SideNavModal from "../components/Global/Navbars/MobileNav";
import Footer from "../components/Global/Footer/Footer";
import { motion, useAnimationControls } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import NextNProgress from "nextjs-progressbar";
import InitDivider from "../components/UI/InitDivider";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const [splashComplete, setSplashComplete] = useState(false);
  // const [loadingSpinner, setLoadingSpinner] = useState(true);
  // const controls = useAnimationControls();
  // const controlsBody = useAnimationControls();

  const client = useClient();

  // const handleLoad = () => {
  //   setLoadingSpinner(false);
  //   controls.start({
  //     opacity: 0,
  //     transition: {
  //       duration: 1,
  //       delay: 4,
  //     },
  //   });
  //   controlsBody.start({
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       delay: 4,
  //     },
  //   });
  //   setTimeout(() => {
  //     setSplashComplete(true);
  //   }, 5000);
  // };

  // const styles = splashComplete ? "" : "bg-darkBlue h-screen w-screen";

  return (
    // <div className={styles}>
    //   <NextNProgress color="rgb(89, 97, 73)" height={3} />
    //   {!splashComplete && (
    //     <div className="relative h-screen w-screen">
    //       {!splashComplete && (
    //         <motion.div
    //           initial={{ opacity: 1 }}
    //           animate={controls}
    //           className="z-50 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
    //         >
    //           <Spline
    //             onLoad={handleLoad}
    //             scene="https://prod.spline.design/gg0modFcZyGWPqfY/scene.splinecode"
    //           />
    //         </motion.div>
    //       )}
    //       {loadingSpinner && (
    //         <div
    //           role="status"
    //           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    //         >
    //           <div className="lds-default">
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   )}
    //   <motion.div initial={{ opacity: 0 }} animate={controlsBody}>
    //     {splashComplete && (
    //       <>
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Navbar />
        <SideNavModal />
        <div className="md:hidden">
          <InitDivider />
        </div>
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </SessionProvider>
    //       </>
    //     )}
    //   </motion.div>
    // </div>
  );
}

export default MyApp;
