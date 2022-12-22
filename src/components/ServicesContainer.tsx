import React from "react";
import Link from "next/link";

const ServicesContainer: React.FC = () => {
  const services = [
    {
      title: "Dog Breeder",
      href: "/services/dog-breeder",
      category: { name: "Article", href: "#" },
      imageUrl: "/dog-breeder.jpg",
    },
    {
      title: "Dog Sitter",
      href: "/services/dog-sitter",
      category: { name: "Video", href: "#" },
      imageUrl: "/dog-sitter.jpg",
    },
    {
      title: "Dog Walker",
      href: "/services/dog-walker",
      category: { name: "Case Study", href: "#" },
      imageUrl: "/dog-walker.jpg",
    },
    {
      title: "Food Supplier",
      href: "/services/food-supplier",
      category: { name: "Case Study", href: "#" },
      imageUrl: "/food-supplier.jpg",
    },
    {
      title: "Dog Owner",
      href: "/services/dog-owner",
      category: { name: "Case Study", href: "#" },
      imageUrl: "/dog-owner.jpg",
    },
  ];
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
                    <p className="text-xl text-center font-bold italic text-lime-700 hover:underline">
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
