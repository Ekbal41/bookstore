import { EyeIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="md:text-lg font-semibold dark:text-gray-100">Products</h1>
          <Link
            href="/product/create"
            className="inline-block   pl-3 pr-4 py-2 text-xs font-medium rounded bg-gray-100 hover:bg-gray-200  dark:bg-gray-800 dark:border dark:border-gray-600 dark:text-gray-100"
          >
            <PlusIcon className="h-5 w-5 inline-block" /> Add New
          </Link>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm ">
            <thead className="text-start bg-gray-50 border-b-[1px] dark:bg-gray-800 dark:border-gray-700 ">
              <tr>
                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900 dark:text-gray-100" >
                  Product Image
                </th>

                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900 dark:text-gray-100">
                  Clicks
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900 dark:text-gray-100">
                  Purchases
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900 dark:text-gray-100">
                  Price
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
              <ProductTableRow />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const ProductTableRow = () => {
  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center gap-4">
          <Image
            src="https://picsum.photos/300/300"
            className="
            rounded-md  object-cover object-center shadow-inner transition duration-500 ease-in-out dark:border dark:border-gray-700"
            alt="Product Image"
            height={30}
            width={50}
            unoptimized={true}
            style={{ height: "30px", width: "50px" }}
          />
          <p className="dark:text-gray-400"> Full Sleeve T-Shirt...</p>
        </td>

        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">23</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">6</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">640TK</td>

        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded  px-2 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100"
          >
            <EyeIcon className="h-5 w-5 " />
          </a>
        </td>
      </tr>
    </>
  );
};
