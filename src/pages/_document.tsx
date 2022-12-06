import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
