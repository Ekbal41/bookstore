"use client";
import Drawer from "react-modern-drawer";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useCart, CartItem } from "@/providers/CartContext";

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="">
      <button
        type="button"
        onClick={toggleDrawer}
        className="relative rounded-full bg-gray-100 dark:bg-gray-700 p-2 focus:outline-none "
      >
        <span className="absolute -top-1 -right-1 inline-flex rounded-full text-white px-[5px] text-xs bg-black shadow-lg dark:bg-gray-900">
          {cart.length}
        </span>
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View cart</span>
        <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        lockBackgroundScroll
        className="!w-full md:!w-[400px] lg:!w-[500px] !h-full"
      >
        <div className="flex justify-between items-center border-b-[1px] py-2 pr-2 pl-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between items-center gap-2">
            <ShoppingBagIcon
              className="h-5 w-5 mb-1 dark:text-gray-100"
              aria-hidden="true"
            />
            <h1 className="dark:text-gray-100">Shopping Cart</h1>
          </div>
          <button
            onClick={toggleDrawer}
            className="hover:bg-gray-100 p-1 rounded-full focus:ring-2 focus:ring-black dark:hover:bg-gray-700 focus:outline-none"
          >
            <XMarkIcon
              className="h-6 w-6 dark:text-gray-100"
              aria-hidden="true"
            />
          </button>
        </div>
        <div>
          {cart.length > 0 ? (
            <CartItems setIsOpen={setIsOpen} cart={cart} />
          ) : (
            <EmptyCart />
          )}
        </div>
      </Drawer>
    </div>
  );
}

const CartItems = ({
  setIsOpen,
  cart,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartItem[];
}) => {
  return (
    <>
      <div className="h-[calc(100vh-2rem)] bg-white overflow-y-auto scrollbar-hide px-4 flex flex-col justify-between  dark:bg-gray-900">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {cart &&
            cart.map((item) => {
              return <CartItemX key={item.id} product={item} />;
            })}
        </ul>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 dark:border-gray-700">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>
              ৳
              {cart.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 dark:hover:bg-black"
            >
              Checkout
            </a>
          </div>
          <div className="my-6 flex justify-center text-center text-sm text-gray-500">
            <p>
             
              <button
                type="button"
                className="font-medium text-black  ms-1 dark:text-gray-100"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const CartItemX = ({ product }: { product: CartItem }) => {
  const { removeFromCart } = useCart();
  return (
    <>
      <li className="flex py-4 ">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-sm dark:border-gray-700">
          <img
            src={product.image}
            alt="product image"
            className="h-full w-full object-cover object-center "
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#" className="dark:text-gray-100">
                  {product.name}
                </a>
              </h3>
              <p className="ml-4">৳{product.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Asif Ekbal</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex gap-2">
              <div className="py-1 px-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 text-xs rounded-md bg-gray-50 border-[1px] capitalize">
                <p> Lifetime</p>
              </div>
              <div className="py-1 px-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 text-xs rounded-md bg-gray-50 border-[1px] capitalize">
                <p> pro</p>
              </div>
            </div>

            <div className="flex">
              <button
                type="button"
                className="font-medium bg-red-50 px-3 py-1 rounded-md text-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

const EmptyCart = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col gap-2 bg-white dark:bg-gray-900  pb-28">
        <ShoppingBagIcon
          className="h-14 w-14 text-gray-400"
          aria-hidden="true"
        />
        <p className="text-xl font-semibold dark:text-gray-100">Your cart is empty!</p>
        <p className="text-sm text-gray-600">
          Add something to make it happy :)
        </p>
      </div>
    </>
  );
};
