import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../public/fullLogo.png";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [session]);

  return (
    <>
      <Head>
        <title>Uptogo | The Easiest Way To Study Abroad</title>
      </Head>
      <div className="relative">
        <div className="fixed md:static top-0 left-0 w-screen h-screen bg-white z-40 md:z-0">
          <div className="flex flex-col items-center justify-center space-y-2 mt-12 md:mt-20">
            <div className="pb-8">
              <Image src={logo} width={240} height={240} alt="signin logo" />
            </div>
            <motion.div
              className="w-60 rounded py-4 bg-sky-600 text-white text-center cursor-pointer"
              onClick={() => signIn("facebook")}
            >
              Facebook Login
            </motion.div>
            <motion.div
              className="cursor-pointer w-60 rounded py-4 bg-orange text-white text-center"
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/login" })
              }
            >
              Google Login
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
