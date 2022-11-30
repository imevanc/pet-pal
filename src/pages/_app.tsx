import Head from "next/head";

import Layout from "../components/Layout";

// import "@/styles/tailwind.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>page-title</title>
        {/* {description && <meta name="description" content={description} />} */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
