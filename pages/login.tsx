import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

const Login: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return !session ? (
    <div className="flex justify-center h-screen items-center border">
      <div className="shadow-xl p-12 rounded-2xl border-gray-100 border space-y-4">
        <div>
          <h2 className="text-bold">Login to Vipr</h2>
          <p className="text-bold font-mono p-2">
            Get ready to meet cool new developers!
          </p>
        </div>
        {/* <button onClick={() => signIn("github")}>Sign in</button> */}
        <button
          onClick={() => signIn("github")}
          className="bg-black hover:bg-black-700 text-white font-bold py-1 px-4 rounded-full flex items-center space-x-4 w-full justify-center hover:bg-white hover:text-black border border-black transition duration-150 ease-in-out"
        >
          <AiFillGithub className="w-10 h-10" />
          <h4>Login with GitHub</h4>
        </button>
      </div>
    </div>
  ) : (
    <div>Logged In</div>
  );
};

export default Login;
