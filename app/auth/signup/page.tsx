import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-black">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Create a new account</p>
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
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            />
          </div>
          <div className="mb-6">
            <div className=" mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            />
          </div>
          <div className="mb-6">
            <div className=" mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="confirm_password"
              placeholder="Your Password"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            />
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="w-full px-3 py-3 text-white bg-black rounded-md focus:bg-gray-900 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center text-gray-400">
            Already have an account yet?{" "}
            <Link
              href="/auth/signin"
              className="text-black focus:outline-none focus:underline hover:underline "
            >
              Sign in
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
