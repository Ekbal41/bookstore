import Image from "next/image";

export default function RecoveryEmailSent() {
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="flex justify-center">
        {" "}
        <Image
          src="/email-sent.svg"
          alt="Email Sent"
          width={200}
          height={200}
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="my-3 text-2xl lg:text-3xl font-semibold ">
          Email Sent Successfully
        </h1>
        <p className="text-gray-500 ">
          Please check your email for a link to reset your password.
        </p>
        
      </div>
    </div>
  );
}
