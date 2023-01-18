import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/tailwind.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
// import UserContext from "../../context/UserContext";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
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
  );
};

export default App;
