import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/tailwind.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { UserDataContext } from "../context/UserDataContext";
import type { AppProps } from "next/app";
import { UserDataIF } from "../interfaces/UserDataIF";

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = React.useState<UserDataIF>({});
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      <SessionProvider session={pageProps.session}>
        <React.Fragment>
          <Head>
            <title>Pet Pal</title>
            {/* {description && <meta name="description" content={description} />} */}
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      </SessionProvider>
    </UserDataContext.Provider>
  );
};

export default App;
