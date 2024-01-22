"use client";
import { useState } from "react";

export default function CreateProductPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className=" lg:mx-56 xl:mx-80 ">
        <div>
          {" "}
          <div className="p-2 md:p-0 ">
            {step === 1 && <Title />}
            {step === 2 && <Price />}
            {step === 3 && <Image />}
          </div>
          <div className="flex justify-center  md:justify-start gap-4 px-2 md:px-0">
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

const Title = () => {
  return (
    <>
      <div className="mb-3 ">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize ">
            Product title
          </h1>
          <p className="text-sm text-gray-900">
            Give your product a title that will catch the{" "}
            <strong className="font-medium">
              attention of your customers.
            </strong>
          </p>
        </div>
        <textarea
          className="w-full px-3  py-2 mb-0  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product title"
        ></textarea>
      </div>
    </>
  );
};
const Price = () => {
  return (
    <>
      <div className="mb-3 ">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize ">
            Product Price
          </h1>
          <p className="text-sm text-gray-900">
            Set the <strong className="font-medium">price</strong> for your
            product.
          </p>
        </div>
        <input
          type="number"
          className="w-full mb-1 px-3 py-2  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product price"
        />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <>
      <div className="mb-3 ">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize ">
            Product Images
          </h1>
          <p className="text-sm text-gray-900">
            Set the <strong className="font-medium">price</strong> for your
            product.
          </p>
        </div>
        <input
          type="file"
          className="w-full mb-1 px-3 py-2  border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product price"
        />
      </div>
    </>
  );
};
