"use client";
import { getUser, loginUser } from "@/app/actions";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignInPage() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await loginUser(email as string, password as string);
    if (res.status === true) {
      setLoading(false);
      toast.success(res.message);
      navigate.push("/dashboard");
    } else {
      setLoading(false);
      toast.error(res.message);
    }
  };

  return (
    <div className="max-w-md mx-auto pt-4">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold ">Sign In</h1>
        <p className="text-gray-600 ">Sign in to access your account</p>
      </div>

      <div className="m-7">
        <form action="" onSubmit={handleSignIn}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 "
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              required
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
              <Link
                href="/auth/password-recovery"
                className="text-sm text-gray-600 hover:underline focus:outline-none focus:text-black hover:text-black focus:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              minLength={8}
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title={`Must contain at least one number and one uppercase
              // and lowercase letter, and at least 8 or more characters`}
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-3 text-white bg-black rounded-md focus:bg-gray-900 focus:outline-none"
            >
              {loading ? (
                <span>
                  <ArrowPathIcon className="w-5 h-5 inline-block mr-2 mb-[3px] animate-spin" />
                  Processing...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          <p className="text-sm text-center text-gray-600">
            Don&#x27;t have an account yet?{" "}
            <Link
              href="/auth/signup"
              className="focus:outline-none focus:underline underline underline-offset-4 hover:text-black"
            >
              Sign up
            </Link>
            .
          </p>
          {/* <p className="text-sm text-center text-gray-600 px-4">
            By clicking sign in, you agree to our{" "}
            <span className="underline underline-offset-4 hover:text-black cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4 hover:text-black cursor-pointer">
              Privacy Policy.
            </span>
          </p> */}
        </form>
      </div>
    </div>
  );
}
