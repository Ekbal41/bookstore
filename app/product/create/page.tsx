"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export default function CreateProductPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="max-w-lg flex-grow">
          <div className="mb-12  pb-4 ">
            <h1 className="text-center text-gray-900">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Create Product
              </span>
              <span className="text-sm text-gray-900 dark:text-gray-400"> / </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Step {step}</span>
            </h1>
          </div>
          <div className="p-2 md:p-0 ">
            {step === 1 && (
              <Fade delay={50}>
                <StepOne />
                <NavigationButtons step={step} setStep={setStep} />
              </Fade>
            )}
            {step === 2 && (
              <Fade delay={50}>
                <StepTwo />
                <NavigationButtons step={step} setStep={setStep} />
              </Fade>
            )}
            {step === 3 && (
              <Fade delay={50}>
                <StepThree />
                <NavigationButtons step={step} setStep={setStep} />
              </Fade>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const NavigationButtons = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Function;
}) => {
  return (
    <>
      <div className="flex justify-between gap-4 px-2 md:px-0 pt-6 ">
        {step > 1 && (
          <button
            className="i py-2 px-4  text-sm font-medium rounded-md  bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-400"
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
          <button className="i py-2 px-4  text-sm font-medium rounded-md  bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-400">
            Cancel
          </button>
        )}
        <button
          className="i py-2 px-4 w-32  text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 dark:hover:bg-black"
          onClick={() => {
            if (step < 3) {
              setStep(step + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const StepOne = () => {
  return (
    <>
      <div className="mb-3 animate-out slide-out-from-left">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize dark:text-gray-100">
            Product title
          </h1>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            Give your product a tile that will catch the{" "}
            <strong className="font-medium">
              attention of your customers.
            </strong>
          </p>
        </div>
        <textarea
          className="w-full px-3  py-2 mb-0 dark:ring-gray-800 dark:bg-gray-700 border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product title"
        ></textarea>
      </div>
      <div className="animate-out slide-out-from-left">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize dark:text-gray-100">
            Product price
          </h1>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            Set the <strong className="font-medium">price</strong> for your
            product.
          </p>
        </div>
        <input
          type="number"
          className="w-full mb-1 px-3 py-2 dark:ring-gray-800 dark:bg-gray-700 border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product StepTwo"
        />
      </div>
    </>
  );
};
const StepTwo = () => {
  return (
    <>
      <div className="animate-out slide-out-from-left">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize dark:text-gray-100">
            Description
          </h1>
          <p className="text-sm text-gray-900  dark:text-gray-400">
            Write a short description about your product.
            <strong className="font-medium"> Maximum 500 characters.</strong>
          </p>
        </div>
        <textarea
          rows={3}
          className="w-full px-3  py-2 mb-0 dark:ring-gray-800 dark:bg-gray-700 border placeholder-gray-300  border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Enter product description"
        ></textarea>
      </div>
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <div className="animate-out slide-out-from-left">
        <div className="mb-4 ">
          <h1 className="md:text-xl font-semibold text-gray-900 capitalize  dark:text-gray-100">
            Product Images
          </h1>
          <p className="text-sm text-gray-900  dark:text-gray-400">
            Upload images of your product. Image size should be{" "}
            <strong className="font-medium">500x500px.</strong>
          </p>
        </div>
        <label
          htmlFor="doc"
          className="flex items-center mb-[7px] p-4 gap-3 rounded-md border border-gray-300 border-dashed bg-gray-50 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
        >
          <CloudArrowUpIcon className="w-12 h-12 text-gray-400" />{" "}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-gray-700  dark:text-gray-400">
              Upload Image
            </h4>
            <span className="text-sm text-gray-500">Max 2 MB</span>
          </div>
          <input type="file" id="doc" name="doc" accept="png, jpg" hidden />
        </label>
      </div>
    </>
  );
};
