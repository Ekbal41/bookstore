export default function CTA() {
  return (
    <section className=" dark:bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
            Weekly Newsletter
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block dark:text-gray-400">
            Stay up to date with the latest trends in web development and design
            with our weekly newsletter.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <button
              type="submit"
              className=" bg-gray-900 text-white px-6 rounded-md py-3 shadow-sm hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span className="text-sm font-medium">Subscribe </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
