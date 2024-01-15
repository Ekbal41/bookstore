"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="lg:px-40 mb-8">
        <div className="my-4 mx-2 md:mx-0 lg:my-6">
          <h2 className="sr-only">Steps</h2>
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="flex items-center gap-2 bg-white ">
                <span
                  className={`h-6 w-6 rounded-full  text-center text-[10px]/6 font-bold ${
                    step >= 1 ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  1
                </span>

                <span className="hidden sm:block"> Details </span>
              </li>

              <li className="flex items-center gap-2 bg-white">
                <span
                  className={`h-6 w-6 rounded-full  text-center text-[10px]/6 font-bold ${
                    step >= 2 ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  2
                </span>

                <span className="hidden sm:block"> Pricing </span>
              </li>

              <li className="flex items-center gap-2 bg-white">
                <span
                  className={`h-6 w-6 rounded-full  text-center text-[10px]/6 font-bold ${
                    step >= 3 ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  3
                </span>

                <span className="hidden sm:block"> Gallery </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="p-2 md:p-0 mb-4 ">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
        </div>
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="i py-2 px-4  text-sm font-medium rounded-md  bg-gray-100 hover:bg-gray-200 "
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                }
              }}
            >
              Previous
            </button>
          )}
          {step === 1 && <div></div>}
          <button
            className="i py-2 px-4  text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 "
            onClick={() => {
              if (step < 3) {
                setStep(step + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

const StepOne = () => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize">
              title
            </h1>
            <p className="text-sm text-gray-600">
              Give your product a title that will catch the attention of your
              customers.
            </p>
          </div>
          <div className=" rounded-lg lg:col-span-2">
            <textarea
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product title"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize">
              description
            </h1>
            <p className="text-sm text-gray-600">
              Write a short description for your product. This will appear on
              the product page.
            </p>
          </div>
          <div className=" rounded-lg lg:col-span-2">
            <textarea
              rows={5}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product description"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize">
              Categories
            </h1>
            <p className="text-sm text-gray-600">
              Select the category that best fits your product. Separete multiple
              categories with a comma.
            </p>
            <p className="text-sm text-gray-600">
              Example: Electronics, Laptops
            </p>
            <p className="text-sm text-gray-600">
              Minimum 1 and maximum 5 categories are allowed.
            </p>
          </div>
          <div className=" rounded-lg lg:col-span-2">
            <textarea
              rows={5}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product categories"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};
const StepTwo = () => {
  return <>step 1</>;
};
const StepThree = () => {
  return <>step 1</>;
};
