import { getSingleProduct } from "@/db";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = getSingleProduct(Number(params.id));
  return (
    <div className="pt-2 pb-8 md:py-12">
      <button className="focus:ring-2 focus:ring-black  rounded-md ">
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <div className="grid md:grid-cols-2  md:py-4 gap-4">
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
            <h1 className="font-bold text-2xl text-start">{product.name}</h1>
            <p>
              <span className="text-gray-500">By</span> {product.owner.name}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-4xl">৳{product.price}</p>
            <div>
              <p className="font-medium"> Save {product.discount}%</p>
              <p className="text-gray-400">Inclusive of all Taxes.</p>
            </div>
          </div>
          <p className="text-gray-500">{product.desc}</p>
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
