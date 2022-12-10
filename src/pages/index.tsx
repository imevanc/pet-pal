import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <main className="h-screen flex flex-col md:flex-row items-center md:items-start md:justify-center bg-white px-6">
        <div className="max-w-3xl w-full md:pt-10">
          <div className="mx-auto max-w-prose">
            <h1>
              <span className="mt-2 block text-left text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                All about dogs
                <br />
                <span className="text-lime-600">in one place</span>
              </span>
            </h1>
            <p className="mt-8 text-lg text-left leading-8 text-gray-500 sm:text-xl lg:text-2xl">
              Our mission is to connect the different parts of the dog industry
              in one place. People and organisations can choose between our
              account types and have instant communication with other users.
            </p>
          </div>
        </div>
        <div className="rounded-full shadow-2xl pt-10 md:pt-10">
          <Image
            className="rounded-full shadow-2xl"
            width={320}
            height={320}
            src="/lab-puppy.jpg"
            alt="lab"
          />
        </div>
      </main>

      <footer></footer>
    </React.Fragment>
  );
};

export default Home;
