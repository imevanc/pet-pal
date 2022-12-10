import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
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
