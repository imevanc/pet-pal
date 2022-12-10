import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <main className="flex items-center justify-center bg-white px-6 py-6">
        <div className="max-w-5xl w-full flex items-center justify-between">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                All about dogs in one place
              </span>
            </h1>
            <p className="mt-8 text-xl text-center leading-8 text-gray-500">
              Our mission is to connect the different parts of the dog industry
              in one place. People and organisations can choose between our
              account types and have instant communication with other users.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </React.Fragment>
  );
};

export default Home;
