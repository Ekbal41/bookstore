import Image from "next/image";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { products, type Product } from "@/db";
import Link from "next/link";
export default function Home() {
  return (
    <div className="my-2 md:my-8">
      <Hero />
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4 text-center md:text-start">
          Latest Products
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product: Product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductCard = (product: Product) => {
  return (
    <>
      <div className="hover:border-gray-300 rounded-md border-[1px] border-gray-200 bg-white hover:shadow-xl transition duration-500 ease-in-out">
        <div className="border-b-[1px] border-gray-200 h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-md">
          <Image
            src={product.image}
            className="
            rounded-t-md w-full h-full object-fit object-center 
            transition duration-500 ease-in-out
            hover:scale-105 transform 
            "
            alt="Product Image"
            height={400}
            width={400}
            unoptimized={true}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium sm:text-lg">
              <Link
                href={`/product/${product.id}`}
                className="hover:underline "
              >
                {product.name.slice(0, 25) + "..."}
              </Link>
            </h3>
            <p className="font-medium text-md">৳{product.price}</p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <h3 className="font-medium text-xs">
              <ShoppingCartIcon className="h-5 w-5 me-1 text-gray-500 inline-block" />
              {product.purchases} Purchases
            </h3>
            <div>
              <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
              <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
              <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
              <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
              <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center my-8 ">
        <div>
          <h1 className="font-bold text-xl lg:text-5xl md:text-3xl mb-4 text-center md:text-start">
            Find everything you need.
          </h1>
          <p className="text-gray-500 text-center md:text-start">
            <strong>The #1 Collection</strong> of Free and Premium Web Resources
            .
          </p>
        </div>
      </div>
    </>
  );
};
