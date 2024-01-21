"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="lg:pt-4 mb-8 lg:mx-56 xl:mx-80  mt-60 ">
        <div>
          {" "}
          <div className="p-2 md:p-0 ">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
          </div>
          <div className="flex justify-center md:justify-start gap-4 px-2 md:px-0 mt-4 ">
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
            {step === 1 && (
              <button className="i py-2 px-4  text-sm font-medium rounded-md  bg-gray-100 hover:bg-gray-200 ">
                Cancel
              </button>
            )}
            <button
              className="i py-2 px-4 w-32  text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 "
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
      </div>
    </>
  );
}

const StepOne = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="rounded-lg mb-4 ">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize text-center md:text-start">
              Product title
            </h1>
            <p className="text-sm text-gray-900 text-center md:text-start w-80 mx-auto">
              Give your product a title that will catch the{" "}
              <strong className="font-medium">
                attention of your customers.
              </strong>
            </p>
          </div>
          <div className=" rounded-lg">
            <textarea
              className="w-full px-3 py-2 mb-0  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product title"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};
const StepTwo = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="rounded-lg mb-4">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize">
              Product Price
            </h1>
            <p className="text-sm text-gray-900">
              Set the <strong className="font-medium">price</strong> for your
              product.
            </p>
          </div>
          <div className=" rounded-lg">
            <input
              type="number"
              className="w-full mb-1 px-3 py-2  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product price"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const StepThree = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="rounded-lg mb-4">
            <h1 className="md:text-xl font-semibold text-gray-900 capitalize">
              Product Images
            </h1>
            <p className="text-sm text-gray-900">
              Upload <strong className="font-medium">images</strong> for your
              product.
            </p>
          </div>
          <div className=" rounded-lg">
            <input
              type="file"
              className="w-full mb-1 px-3 py-2  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter product price"
            />
          </div>
        </div>
      </div>
    </>
  );
};
