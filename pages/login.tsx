import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/fullLogo.png";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.user === "Authenticated") {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-screen h-screen bg-white z-40 ">
        <div className="flex flex-col items-center justify-center space-y-2 mt-12">
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
  );
}
