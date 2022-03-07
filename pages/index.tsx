import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar } from "../components/Navbar";
import Login from "./login";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        <Navbar user={JSON.stringify(session.user?.name)} />
      </>
    );
  } else {
    return <Login />;
  }
};

export default Home;
