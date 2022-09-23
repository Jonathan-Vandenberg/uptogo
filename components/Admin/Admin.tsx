import { useSession } from "next-auth/react";
import Link from "next/link";
import { useUserInterestedQuery } from "../../types";
import logo from "../../public/uptogoFavicon.png";
import Image from "next/image";

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
            {data?.userInterested?.map((user, i) => (
              <li
                key={i}
                className="mt-4 p-4 border-2 border-orange/30 rounded-lg"
              >
                <p className="logoFont">{user?.name}</p>
                <p className="logoFont">{user?.email}</p>
                <p className="logoFont">{user?.mobile}</p>
                <p className="logoFont">{user?.course}</p>
              </li>
            ))}
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
