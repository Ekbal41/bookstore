"use client";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function RecoveryEmailSent() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="max-w-md flex-grow">
        {" "}
        <EnvelopeIcon className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-100" />
        <div className="flex justify-center flex-col mt-4 ">
          <h1 className="my-3 text-2xl lg:text-3xl font-semibold text-center dark:text-gray-100">
            Email Sent Successfully
          </h1>
          <p className="text-gray-500 w-80 mx-auto text-center dark:text-gray-400">
            Please check your inbox and follow the given instructions. Thank
            you!
          </p>
          <div className="flex justify-center">
            {" "}
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full w-fit"
              onClick={() => router.push("/")}
            >
              <HomeIcon className="h-5 w-5 inline-block -mt-1 me-2" />
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
