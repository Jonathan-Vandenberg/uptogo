import { useSession } from "next-auth/react";
import Link from "next/link";
import { useUserInterestedQuery } from "../../types";

export default function Admin() {
  const { data } = useUserInterestedQuery();
  const { data: session, status } = useSession();
  return (
    <>
      {session?.user?.email ===
        (process.env.ADMIN_EMAIL || "urbangentryjon@gmail.com") && (
        <div className="w-full">
          <ul className="mx-2">
            {data?.userInterested?.map((user, i) => (
              <li key={i} className="border-2 border-sky-300 rounded-lg p-3">
                <p className="py-4 logoFont">{user?.name}</p>
                <p className="py-4 logoFont">{user?.email}</p>
                <p className="py-4 logoFont">{user?.mobile}</p>
                <p className="py-4 logoFont">{user?.course}</p>
              </li>
            ))}
          </ul>
          <Link href={"/"}>Home</Link>
        </div>
      )}
    </>
  );
}
