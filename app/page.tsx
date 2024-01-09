import Image from "next/image";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className=" my-2 md:my-8">
      <Hero />
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4 text-center md:text-start">
          Latest Products
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

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

const ProductCard = () => {
  return (
    <>
      <div className=" rounded-md border-2 border-gray-100 bg-white">
        <Image
          src="/product-thumb.jpg"
          className="rounded-t-md w-full "
          alt="Product Image"
          height={400}
          width={400}
        />
        <div className="p-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline ">
                Question about Livewire...
              </a>
            </h3>
            <p className="font-medium text-md">৳200</p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <h3 className="font-medium text-xs">
              <ShoppingCartIcon className="h-5 w-5 me-1 text-gray-500 inline-block" />
              320 Purchases
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
