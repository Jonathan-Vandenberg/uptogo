import { useSession } from "next-auth/react";
import Link from "next/link";
import { useUserInterestedQuery } from "../../types";
import logo from "../../public/uptogoFavicon.png";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function Admin() {
  const { data } = useUserInterestedQuery();
  const { data: session, status } = useSession();
  return (
    <>
      {session?.user?.email ===
        (process.env.ADMIN_EMAIL || "urbangentryjon@gmail.com") && (
        <div className="w-full flex items-center justidy-center flex-col">
          <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
            <Image src={logo} alt="logo" width={60} height={60} />
          </div>
          <ul className="p-4 w-full">
            {data ? (
              data?.userInterested?.map((user, i) => (
                <li
                  key={i}
                  className="mt-4 p-4 border-2 border-gray-400 rounded-lg"
                >
                  <p className="logoFont">{user?.name}</p>
                  <p className="logoFont">{user?.email}</p>
                  <p className="logoFont">{user?.mobile}</p>
                  <p className="logoFont">{user?.course}</p>
                </li>
              ))
            ) : (
              <SkeletonComponent />
            )}
          </ul>
          <div>
            <Link href={"/"}>
              <div className="md:text-lg lg:text-xl flex items-center justify-center space-x-3  cursor-pointer text-gray-700 mb-10 mt-3 border-b-8 rounded-full px-6 py-2 border-orange border-2">
                <p>Home</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

const SkeletonComponent = () => {
  return (
    <Stack spacing={1}>
      <Skeleton width={180} height={20} variant="rectangular" />
      <Skeleton width={90} height={20} variant="rectangular" />
      <Skeleton width={60} height={20} variant="rectangular" />
      <Skeleton width={157} height={20} variant="rectangular" />
    </Stack>
  );
};
