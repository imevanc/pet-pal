import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import type { PayloadUserPartial } from "../../../types/PayloadUserPartial";
import { removeBlankAttributes } from "../../../utils/removeBlankAttributes";
import { User } from "@prisma/client";

const PersonalInformation: React.FC = () => {
  const { register, handleSubmit } = useForm<User>();
  const user = useUserContext();

  const onSubmit = async (data: User): Promise<any> => {
    const payloadUser: PayloadUserPartial = {
      id: user?.id!,
      name: data.name,
      email: data.email,
      addressLineOne: data.addressLineOne,
      city: data.city,
      postcode: data.postcode,
      status: data.status,
      country: data.country,
    };
    const payload = removeBlankAttributes(payloadUser);

    try {
      const data = await axios.post("/api/updateUserById", payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md bg-white py-6 px-4 sm:p-6">
        <h3 className="text-xl font-medium leading-6 text-gray-900">
          Personal Information
        </h3>
        <div className="mt-4 grid grid-cols-6 gap-6">
          <div className="col-span-3">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              autoComplete="status"
              placeholder="Status"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("status")}
            />
          </div>

          <div className="col-span-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <label
                htmlFor="file-upload"
                className="cursor-pointer ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                <span>Upload</span>
                <input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  {...register("image")}
                />
              </label>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoComplete="name"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("name")}
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              autoComplete="email"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("email")}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              autoComplete="country"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("country")}
            >
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </select>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              autoComplete="street-address"
              placeholder="Street address"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("addressLineOne")}
            />
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              autoComplete="city"
              placeholder="City"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("city")}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Post code / ZIP
            </label>
            <input
              type="text"
              id="post-code"
              autoComplete="post-code"
              placeholder="Post code"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
              {...register("postcode")}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PersonalInformation;
