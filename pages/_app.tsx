import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import CoursesPill from "../components/Global/CoursesPill";
import Footer from "../components/Global/Footer/Footer";
import SideNavModal from "../components/Global/Navbars/MobileNav";
import Navbar from "../components/Global/Navbars/Navbar";
import InitDivider from "../components/UI/InitDivider";
import { useClient } from "../lib/client";
import "../styles/input.css";
import store from "../store/store";
import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  const client = useClient();
  return (
    <Provider store={store}>
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
