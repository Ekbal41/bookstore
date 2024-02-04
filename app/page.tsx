import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { products, type Product } from "@/db";
import Link from "next/link";
import StarRating from "@/components/StartRating";
import CTA from "@/components/home/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      {/* <div className="mb-8">
        <Title text="Populer This Week" />
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((product: Product) => (
            <div key={product.id}>
              <ProductCartMini {...product} />
            </div>
          ))}
        </div>
      </div> */}
      <div>
        <Title text="Populer This Week" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product: Product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      {/* <CTA /> */}
    </>
  );
}

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold text-center md:text-start dark:text-gray-100">
        {text}
      </h1>
    </>
  );
};

const ProductCartMini = (product: Product) => {
  return (
    <>
      <div className="shadow-md p-2 my-2 rounded-md bg-gray-50 border">
        <Image
          src={product.image}
          alt="Product Image"
          height={600}
          width={600}
          className="rounded-md object-cover min-h-72 min-w-64"
        />
        <h3 className="font-medium text-md dark:text-gray-100 mt-2">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
      </div>
    </>
  );
};

const ProductCard = (product: Product) => {
  return (
    <>
      <div className="hover:border-gray-300  rounded-md border-[1px] border-gray-200 dark:border-gray-700 dark:bg-gray-800  bg-white hover:shadow-md ">
        <div className="border-b-[1px] border-gray-200 dark:border-gray-700 h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-md">
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

        <div className="p-3 relative">
          {/* <button className="absolute -top-4 right-2 bg-blue-500 text-white text-sm px-3 shadow-lg py-1 rounded-full hover:bg-blue-600">
            Add to Cart
          </button> */}
          <div className="flex justify-between items-center">
            <h3 className="font-medium sm:text-lg">
              <Link
                href={`/product/${product.id}`}
                className="hover:underline dark:text-gray-100"
              >
                {product.name.slice(0, 25) + "..."}
              </Link>
            </h3>
            <p className="font-medium text-md dark:text-gray-100">
              ৳{product.price}
            </p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <h3 className="font-medium text-xs dark:text-gray-100">
              <ShoppingCartIcon className="h-5 w-5 me-1 text-gray-500 inline-block dark:text-gray-100" />
              {product.purchases} Purchases
            </h3>
            <StarRating rating={product.rating} />
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center justify-between mb-10 xl:mb-20 xl:mt-16">
        <div>
          <div>
            <div
              className="bg-gray-100 inline-block text-sm 
            dark:bg-gray-800 dark:text-gray-100 border dark:border-gray-700
            px-3 py-1 mb-4 rounded-full text-gray-600"
            >
              <p>11th Anniversary Sale!🎉</p>
            </div>
            <h1 className="font-bold text-xl lg:text-5xl md:text-3xl mb-4 text-gray-800 dark:text-gray-100">
              Find everything you need to build your website
            </h1>
            <p className=" dark:text-gray-100">
              <strong>The #1 Collection</strong> of Free and Premium Web
              Resources.
            </p>
            <p className="dark:text-gray-100">
              11th Anniversary Sale! <strong>50% off</strong> on all products.
            </p>
            <p className="mb-2 dark:text-gray-100">
              20% off on all products. Use code <strong>WELCOME20</strong>
            </p>
          </div>
          <div>
            <a className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4 inline-block">
              View All Products
            </a>
          </div>
        </div>
        <div className=" flex justify-end items-center bg-red-10"></div>
      </div>
    </>
  );
};

const Categories = () => {
  return (
    <div
      className="mb-8 flex gap-4
    overflow-x-auto scrollbar-hide
    backdrop-filter backdrop-blur-md
    "
    >
      <CategoryButton name="laravel" />
      <CategoryButton name="django" />
      <CategoryButton name="react js template" />
      <CategoryButton name="vue js template" />
      <CategoryButton name="angular js template" />
      <CategoryButton name="tailwind css" />
      <CategoryButton name="bootstrap" />
      <CategoryButton name="wordpress" />
      <CategoryButton name="shopify" />
    </div>
  );
};

const CategoryButton = ({ name }: { name: string }) => {
  return (
    <>
      <button className="bg-gray-100 px-3 py-2 md:px-6 Md:py-4 rounded-md hover:bg-gray-100/75 border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
        <p className="text-xl text-nowrap capitalize">{name}</p>
      </button>
    </>
  );
};
