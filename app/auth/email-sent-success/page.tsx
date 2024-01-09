import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function RecoveryEmailSent() {
  return (
    <div className="max-w-md mx-auto my-10">
      <EnvelopeIcon className="mx-auto h-12 w-12 text-gray-400" />
      {/* <div className="flex justify-center">
        <Image
          src="/email-sent.svg"
          alt="Email Sent"
          width={200}
          height={200}
        />
      </div> */}
      <div className="text-center mt-4">
        <h1 className="my-3 text-2xl lg:text-3xl font-semibold ">
          Email Sent Successfully
        </h1>
        <p className="text-gray-500 ">
          Please check your email and follow the instructions. follow the instructions.
        </p>
      </div>
    </div>
  );
}
