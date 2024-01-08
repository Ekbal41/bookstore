export default function ChangePassword() {
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="text-center">
        <h1 className="my-3 text-2xl lg:text-3xl font-semibold text-black">
          Chnage Password
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Give your new password, strong and secure.
        </p>
      </div>

      <div className="m-7">
        <form action="">
          <div className="mb-6">
            <div className=" mb-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                New Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="new_password"
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
              Change Password
            </button>
          </div>

          <p className="text-sm text-center text-gray-400 mt-2">
            Book Store Inc. © 2024
          </p>
        </form>
      </div>
    </div>
  );
}
