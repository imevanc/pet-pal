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
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <meta name="description" content="Description" />
              <meta name="keywords" content="Keywords" />
              <title>Pet Pal</title>

              <link rel="manifest" href="/manifest.json" />
              <link
                href="/icons/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
              />
              <link
                href="/icons/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
              />
              <link rel="apple-touch-icon" href="/apple-icon.png"></link>
              <meta name="theme-color" content="#84cc16" />
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
