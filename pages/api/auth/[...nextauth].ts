import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,

  authDomain: process.env.authDomain,

  projectId: process.env.projectId,

  storageBucket: process.env.storageBucket,

  messagingSenderId: process.env.messagingSenderId,

  appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user);
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: user.name,
          image: user.image,
          id: user.id,
          interests: [],
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return true;
    },
  },
});
