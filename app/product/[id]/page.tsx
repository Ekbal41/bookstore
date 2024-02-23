"use client";
import { getSingleProduct } from "@/db";
import Image from "next/image";
import {
  ChevronRightIcon,
  HandThumbUpIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import StarRating from "@/components/StartRating";
import { CartItem, useCart } from "@/providers/CartContext";
import { StarIcon } from "@heroicons/react/24/solid";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = getSingleProduct(Number(params.id));
  const {
    addToCart,
    itemExistInCart,
  }: { addToCart: Function; itemExistInCart: Function } = useCart();
  const item: CartItem = {
    id: product.id,
    name: product.name,
    desc: product.desc,
    quantity: 1,
    price: product.price,
    image: product.image,
  };
  const handleAddToCart = () => {
    if (itemExistInCart(product.id)) {
      return;
    }
    addToCart(item);
  };
  return (
    <div className="pb-8 md:px-0 ">
      <ol className="flex items-center gap-1 text-sm text-gray-600 mb-3 md:mb-2 dark:text-gray-400">
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
      <div className="grid lg:grid-cols-2  md:py-4 gap-3 md:gap-4">
        <div>
          <Image
            src={product.image}
            className="
            rounded-md w-full  object-fit object-center shadow-md transition duration-500 ease-in-out"
            alt="Product Image"
            height={400}
            width={400}
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-start dark:text-gray-100">
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
                    className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            }
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-4xl dark:text-gray-100">
              ৳{product.price}
            </p>
            <div>
              <p className="font-medium dark:text-gray-100">
                {" "}
                Save {product.discount}%
              </p>
              <p className="text-gray-400">Inclusive of all Taxes.</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-400">{product.desc}</p>
          <p>
            <span className="text-gray-500">Sold by :</span>{" "}
            {product.owner.name}
          </p>
          <div className="">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-2 rounded-md w-full lg:w-1/2"
              disabled={itemExistInCart(Number(params.id))}
            >
              <ShoppingBagIcon className="h-5 w-5 inline-block me-1 mb-[5px]" />
              {itemExistInCart(Number(params.id))
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
          {/* <div>
            <FlagIcon className="h-5 w-5 text-gray-500 inline-block me-1" />
            Report this item
            </div> */}
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-1  rounded-md p-6 md:p-8 border h-fit dark:border-gray-700">
            <div className="flex justify-center items-center flex-col mb-8">
              <h1 className="text-2xl font-semibold mb-4 dark:text-gray-100">
                Customer Reviews{" "}
              </h1>
              <div className="flex gap-3 bg-gray-50 py-3 px-3 border-[1px] rounded-md mb-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
                <StarRating rating={4.5} />
                <p className="text-sm">4.5 out of 5</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                30 customer ratings
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <RatingLine rating={80} type={1} />
              <RatingLine rating={70} type={2} />
              <RatingLine rating={60} type={3} />
              <RatingLine rating={50} type={4} />
              <RatingLine rating={40} type={5} />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 ">
            <div className="border rounded-md mb-8 p-6 md:p-8 dark:border-gray-700">
              <div className="mb-6">
                <h1 className="text-xl font-semibold mb-4 dark:text-gray-100">
                  Write a Review{" "}
                </h1>
                <p className="dark:text-gray-100">
                  Click on a star to rate it!
                </p>
                <StarRating rating={4} />
              </div>
              <div>
                <input
                  type="text"
                  className="bg-gray-100 outline-none dark:ring-gray-800 dark:text-gray-400 dark:bg-gray-700 px-4 py-3 border rounded-md w-full mb-4 focus:ring-2 focus:ring-black"
                  placeholder="Type review headline"
                />
                <textarea
                  className="w-full mb-4 h-24 resize-none dark:ring-gray-800 dark:bg-gray-700 dark:text-gray-400 bg-gray-100 outline-none rounded-md border px-4 py-3 focus:ring-2 focus:ring-black"
                  placeholder="Write your review here"
                />
                <div className="flex lg:justify-end">
                  {" "}
                  <button className="bg-black text-white px-6 py-[10px] rounded-md w-full md:w-fit ">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RatingLine = ({ rating, type }: { rating: number; type: number }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <p className="text-nowrap text-sm dark:text-gray-100">{type} start</p>
        <div className="overflow-hidden bg-gray-100 h-3 rounded-full w-full ">
          <span
            className="h-full bg-yellow-500 w-full block rounded-full"
            style={{ width: `${rating}%` }}
          ></span>
        </div>
        <p className="text-sm dark:text-gray-100">{rating}%</p>
      </div>
    </>
  );
};

const Review = () => {
  return (
    <>
      <div className="border rounded-md dark:border-gray-700">
        <div className="p-6 md:p-8 border-b-[1px] dark:border-gray-700">
          {" "}
          <h1 className="text-xl font-semibold mb-4 dark:text-gray-100">
            Quality is not good. I am not satisfied with the product.
          </h1>
          <p className="dark:text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            commodi illum repellat, debitis accusamus aliquid quibusdam minima
            maxime est natus eveniet molestiae cupiditate iure magnam porro nisi
            nesciunt architecto laudantium laboriosam ducimus aliquam ut veniam!
            Ducimus.
          </p>
        </div>
        <div className="px-8 py-4">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
            <div className="flex gap-3 items-center">
              <img
                alt="user image"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="border-[1px] h-9 w-9 rounded-full"
              />
              <p className="capitalize dark:text-gray-100">
                Asif Ekbal
                <span className="ms-2 text-sm text-gray-500">12 jan, 2024</span>
              </p>
            </div>
            <div className="flex gap-3 items-center ms-11 flex-wrap dark:text-gray-100">
              <div>
                {" "}
                <StarIcon className="h-5 w-5 text-yellow-500 inline-block mb-1" />{" "}
                4 of 5
              </div>
              <div>
                <HandThumbUpIcon className="h-5 w-5 text-gray-500 inline-block mb-1" />{" "}
                45
              </div>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-100/75 dark:hover:bg-gray-700 rounded-full transition ease-in-out duration-300">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
