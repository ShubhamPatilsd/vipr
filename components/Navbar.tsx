import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MdLogout } from "react-icons/md";

interface INavbar {
  user: string;
}

export const Navbar: React.FC<INavbar> = ({ user }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  return (
    <div className="bg-black h-screen">
      <nav className="flex justify-between items-center px-4 py-2">
        <div>
          <a href="/">
            <h1 className="text-bold text-white font-mono">Vipr</h1>
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <img
            src={session?.user?.image ? session?.user?.image : ""}
            className="w-12 h-12 rounded-full"
          />
          <button onClick={() => signOut()}>
            <MdLogout className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </nav>
      <div className="welcomeText content-center">
        <p className="text-center text-bold text-white text-lg">
          Welcome, {user}!
        </p>
      </div>
    </div>
  );
};
