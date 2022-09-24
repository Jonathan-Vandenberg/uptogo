import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import CoursesPill from "../components/Global/CoursesPill";
import Footer from "../components/Global/Footer/Footer";
import SideNavModal from "../components/Global/Navbars/MobileNav";
import Navbar from "../components/Global/Navbars/Navbar";
import InitDivider from "../components/UI/InitDivider";
import { useClient } from "../lib/client";
import "../src/input.css";
import store from "../store/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = useClient();
  return (
    <Provider store={store}>
      <Head>
        <title>Uptogo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Navbar />
          <SideNavModal />
          <div className="md:hidden">
            <InitDivider />
          </div>
          <Component {...pageProps} />
          <CoursesPill />
          <Footer />
        </ApolloProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
