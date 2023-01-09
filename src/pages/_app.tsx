import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Router from "next/router";
import { magic } from "../../lib/magic";
import "@magiclabs/ui/dist/cjs/index.css";
import { MagicUserIF } from "../interfaces/MagicUserIF";

const App = ({ Component, pageProps }: AppProps) => {
  const [magicUser, setMagicUser] = React.useState<MagicUserIF>({
    user: "",
    loading: false,
  });

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }
  React.useEffect((): void => {
    setMagicUser({ user: "", loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
      } else {
        Router.push("/account/sign-in");
        setUser({ user: null });
      }
    });
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Pet Pal</title>
        {/* {description && <meta name="description" content={description} />} */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default App;
