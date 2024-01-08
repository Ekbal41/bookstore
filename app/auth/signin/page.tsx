import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Sign In
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in to access your account
        </p>
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
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
              <a
                href="#!"
                className="text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 focus:underline"
              >
                Forgot password?
              </a>
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
            <button
              type="button"
              className="w-full px-3 py-3 text-white bg-black rounded-md focus:bg-gray-900 focus:outline-none"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-500 focus:outline-none focus:underline "
            >
              Sign up
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
