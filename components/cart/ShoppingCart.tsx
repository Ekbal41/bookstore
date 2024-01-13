"use client";
import Drawer from "react-modern-drawer";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <button
        type="button"
        onClick={toggleDrawer}
        className="relative rounded-full bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -top-1 -right-1 inline-flex rounded-full text-white px-[5px] text-xs bg-black shadow-lg">
          0
        </span>
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View cart</span>
        <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={320}
        lockBackgroundScroll
      >
        <div className="flex justify-between items-center border-b-[1px] py-2 pr-2 pl-4">
          <div className="flex justify-between items-center gap-2">
            <ShoppingBagIcon className="h-5 w-5 mb-1" aria-hidden="true" />
            <h1>Shopping Cart</h1>
          </div>
          <button
            onClick={toggleDrawer}
            className="hover:bg-gray-100 p-1 rounded-full focus:ring-2 focus:ring-black"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div>
          {/* empty cart */}
          <div className="flex justify-center items-center h-screen flex-col gap-2  pb-20">
            <ShoppingBagIcon className="h-14 w-14 text-gray-400" aria-hidden="true" />
            <p className="text-xl font-semibold">Your cart is empty!</p>
            <p className="text-sm text-gray-500">
              Add something to make it happy :)
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
