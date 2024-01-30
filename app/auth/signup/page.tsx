"use client";
import { createUser } from "@/app/actions";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
export default function SignUpPage() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");
    if (password !== confirm_password) {
      toast.error("Password's do not match!");
      return;
    }
    const res = await createUser(email as string, password as string);
    if (res.status === true) {
      toast.success(res.message);
      setLoading(false);
      navigate.push("/auth/signin");
    } else {
      setLoading(false);
      toast.error(res.message);
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="max-w-md flex-grow">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-100 ">Sign Up</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create a new account
          </p>
        </div>

        <div className="m-7">
          <form action="" onSubmit={handleSignUp}>
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
                required
                className="w-full px-3 py-2 placeholder-gray-300 border dark:ring-gray-800 dark:bg-gray-700 border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                className="w-full px-3 py-2 placeholder-gray-300 border dark:ring-gray-800 dark:bg-gray-700 border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                minLength={8}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                // title={`Must contain at least one number and one uppercase
                // and lowercase letter, and at least 8 or more characters`}
                required
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
                name="confirm_password"
                id="confirm_password"
                placeholder="Your Password"
                className="w-full px-3 py-2 placeholder-gray-300 dark:ring-gray-800 dark:bg-gray-700 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                minLength={8}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                // title={`Must contain at least one number and one uppercase
                //   and lowercase letter, and at least 8 or more characters`}
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-3 text-white bg-black rounded-md dark:focus:bg-black focus:bg-gray-900 focus:outline-none"
              >
                {loading ? (
                  <span>
                    <ArrowPathIcon className="w-5 h-5 inline-block mr-2 mb-[3px] animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400 ">
              Already have an account yet?{" "}
              <Link
                href="/auth/signin"
                className="focus:outline-none focus:underline underline underline-offset-4 hover:text-black dark:hover:text-gray-300"
              >
                Sign in
              </Link>
              .
            </p>
            {/* <p className="text-sm text-center text-gray-600 px-4">
            By clicking continue, you agree to our{" "}
            <span className="underline underline-offset-4 hover:text-black cursor-pointer">
              Terms of Service
            </span>
            {" "} and{" "}
            <span className="underline underline-offset-4 hover:text-black cursor-pointer">
              Privacy Policy.
            </span>
          </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}
