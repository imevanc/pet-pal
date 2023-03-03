import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/tailwind.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { PetsContextProvider } from "../context/PetsContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <UserContextProvider>
        <PetsContextProvider>
          <React.Fragment>
            <Head>
              <title>Pet Pal</title>
              {/* {description && <meta name="description" content={description} />} */}
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </React.Fragment>
        </PetsContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default App;
