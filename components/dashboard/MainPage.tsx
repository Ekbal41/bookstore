import { PlusIcon } from "@heroicons/react/24/outline";

export default function MainPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className=" md:text-xl font-semibold dark:text-gray-100">
            Good Morning, Asif Ekbal 👋
          </h1>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Here&apos;s what&apos;s your overall business status.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <LastSell />
          <LastSell />
          <LastSell />
          <LastSell />
          <LastSell />
        </div>
      </div>
    </>
  );
}

const LastSell = () => {
  return (
    <>
      <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Selling Price</p>

            <p className="text-2xl font-medium text-gray-900 dark:text-gray-100">240 TK</p>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-2 justify-end items-end">
          <div className="inline-flex gap-2 rounded  p-1 ">
            <a href="#!" className="text-xs font-medium hover:underline dark:text-gray-100">
             PID-9836534523{" "}
            </a>
          </div>
          <div className="inline-flex w-fit gap-2 rounded bg-green-100 p-1 pr-2 text-green-600">
            <PlusIcon className="h-4 w-4" />
            <span className="text-xs font-medium"> 67 TK </span>
          </div>
        </div>
      </article>
    </>
  );
};
