import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function RecoveryEmailSent() {
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
        </div>
      </div>
    </div>
  );
}
