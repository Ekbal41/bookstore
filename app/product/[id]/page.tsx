import { getSingleProduct } from "@/db";
import Image from "next/image";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import StarRating from "@/components/StartRating";
export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = getSingleProduct(Number(params.id));
  return (
    <div className="pb-8 md:py-4 px-2 md:px-0">
      <ol className="flex items-center gap-1 text-sm text-gray-600 py-3 md:py-0">
        <li>
          <Link href="/" className="block transition hover:text-gray-700">
            <span className="sr-only"> Home </span>
            <HomeIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <ChevronRightIcon className="h-5 w-5" />
        </li>
        <li>
          <Link href="/" className="block transition hover:text-gray-700">
            <span className="sr-only"> Products </span>
            Products
          </Link>
        </li>
        <li>
          <ChevronRightIcon className="h-5 w-5" />
        </li>
        <li className="block transition ">
          <span className="sr-only"> Products ID </span>
          ID-{product.id}
        </li>
      </ol>
      <div className="grid md:grid-cols-2  md:py-4 gap-3 md:gap-4">
        <div>
          <Image
            src={product.image}
            className="
            rounded-md w-full h-full object-fit object-center shadow-md transition duration-500 ease-in-out"
            alt="Product Image"
            height={400}
            width={400}
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl text-start">
              {product.name}
            </h1>
            <div className="flex gap-2 items-center">
              <StarRating rating={product.rating} />
              <div>
                <p className="text-gray-900 text-lg font-semibold">
                  {product.rating}{" "}
                  <span className="text-sm font-normal">(123 Reviews)</span>
                </p>
              </div>
            </div>
            {
              <div className="flex gap-2 mt-4 flex-wrap">
                {product.category.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            }
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-4xl">৳{product.price}</p>
            <div>
              <p className="font-medium"> Save {product.discount}%</p>
              <p className="text-gray-400">Inclusive of all Taxes.</p>
            </div>
          </div>
          <p className="text-gray-700">{product.desc}</p>
          <p>
            <span className="text-gray-500">Sold by :</span> {product.owner.name}
          </p>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Quantity"
              className=" w-28 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
