import React from "react";
import Link from "next/link";
import Services from "../data/fixtures/Services.json";

interface Category {
  name: string;
  href: string;
}

interface Service {
  title: string;
  href: string;
  category: Category;
  imageUrl: string;
}

const ServicesContainer: React.FC = () => {
  const services: Service[] = Services.services;
  return (
    <React.Fragment>
      <div className="mx-auto w-full sm:px-6 py-4 mt-8 lg:py-6 flex flex-col items-center">
        <p className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
          Meet the platform that
        </p>
        <p className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-lime-600">
          unifies the dog industry
        </p>
        <div className="flex flex-col w-full max-w-5xl pb-5 pt-4">
          <div className="m-auto grid w-full max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {services.map((service, idx) => {
              let pos = "";
              if (idx === services.length - 1) {
                pos = "lg:col-start-2 lg:col-end-4";
              }
              return (
                <div key={idx} className={`flex flex-col ${pos}`}>
                  <Link href={service.href}>
                    <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-2xl hover:scale-105">
                      <img
                        className="lg:h-72 w-full object-cover"
                        src={service.imageUrl}
                        alt=""
                      />
                    </div>
                    <p className="pt-1 text-xl text-center font-bold italic text-lime-700 hover:underline">
                      {service.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesContainer;
