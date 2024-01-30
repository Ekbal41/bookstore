import Link from "next/link";

export default function PasswordRecovery() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="max-w-md flex-grow">
        {" "}
        <div className="text-center">
          <h1 className="my-3 text-2xl lg:text-3xl font-semibold dark:text-gray-100">
            Your Email
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email address.</p>
        </div>
        <div className="m-7">
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 placeholder-gray-300 border dark:ring-gray-800 dark:bg-gray-700 border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              />
            </div>
            <div className="mb-6">
              <Link
                href="/auth/email-sent-success"
                type="button"
                className="w-full px-3 py-3 text-white bg-black rounded-md focus:bg-gray-900 dark:hover:bg-black focus:outline-none text-center dark:text-gray-100"
              >
                Send Password Reset Link
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
