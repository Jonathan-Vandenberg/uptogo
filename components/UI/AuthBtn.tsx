import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const AuthBtn = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div className="auth-btn">loading...</div>;
  }
  if (status === "unauthenticated") {
    return (
      <div className="auth-btn">
        <button
          onClick={() => signIn()}
          className="text-lg text-orange logoFont"
        >
          Login
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center space-x-3">
      <Image
        /* @ts-ignore */
        src={session.user.image}
        /* @ts-ignore */
        alt={session.user.name}
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="">
        <button
          onClick={() => signOut()}
          className="text-lg logoFont text-orange"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default AuthBtn;
