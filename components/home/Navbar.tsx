"use client";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ShoppingCart from "@/components/cart/ShoppingCart";
import { getUser, logOut } from "@/app/actions";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  {
    name: "About Us",
    href: "/about",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({
  setColorMode,
  colorMode,
}: {
  setColorMode: any;
  colorMode: any;
}) {
  const navigate = useRouter();
  const path = usePathname();
  const [user, setUser] = useState<any>(null);
  const handleLogout = async () => {
    await logOut();
    setUser(null);
    toast.success("Logged Out Successfully");
    navigate.push("/");
  };
  useEffect(() => {
    const run = async () => {
      const usr = await getUser();
      setUser(usr);
    };
    !user && run();
  }, [path]);

  return (
    <Disclosure
      as="nav"
      className="bg-white  fixed w-full top-0 z-50 bg-opacity-80 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-80 dark:text-gray-100"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-[1px] dark:border-gray-700">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 dark:text-gray-100"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6  dark:text-gray-100"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center font-bold "
                >
                  <ShoppingBagIcon className="h-6 w-6 dark:text-gray-100 inline-block me-2 mb-1" />
                  Nova Store
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          path === item.href
                            ? "bg-gray-100 dark:bg-gray-700"
                            : " hover:bg-gray-100 dark:hover:bg-gray-700",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={path === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex md:gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:block">
                  <SearchBox />
                </div>
                <ShoppingCart />
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md dark:text-gray-100 bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <div className="block px-4 py-2 font-semibold text-sm cursor-pointer ">
                                @{user.email.split("@")[0]}
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/dashboard"
                                className={classNames(
                                  active ? "bg-gray-100 dark:bg-gray-700" : "",
                                  "block px-4 py-2 text-sm "
                                )}
                              >
                                Dashboard
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      {!user && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/auth/signin"
                                className={classNames(
                                  active ? "bg-gray-100 dark:bg-gray-700" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Sign In
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/auth/signup"
                                className={classNames(
                                  active ? "bg-gray-100 dark:bg-gray-700" : "",
                                  "block px-4 py-2 text-sm "
                                )}
                              >
                                Create Account
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#!"
                            className={classNames(
                              active ? "bg-gray-100 dark:bg-gray-700" : "",
                              "block px-4 py-2 text-sm  border-t-[1px] border-gray-200 dark:border-gray-700"
                            )}
                          >
                            FAQ
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#!"
                            className={classNames(
                              active ? "bg-gray-100 dark:bg-gray-700" : "",
                              "block px-4 py-2 text-sm border-b-[1px] border-gray-200 dark:border-gray-700"
                            )}
                          >
                            Help
                          </Link>
                        )}
                      </Menu.Item>
                      {user && (
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={handleLogout}
                            >
                              Log Out
                            </div>
                          )}
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex justify-between items-center ps-4 pe-3 py-2 text-sm ">
                            <p>Dark Mode</p>
                            <label className="relative inline-flex cursor-pointer items-center scale-75">
                              <input
                                id="switch"
                                type="checkbox"
                                className="peer sr-only"
                                onChange={(e) => {
                                  setColorMode(
                                    e.target.checked ? "dark" : "light"
                                  );
                                }}
                                checked={colorMode === "dark"}
                              />
                              <label
                                htmlFor="switch"
                                className="hidden"
                              ></label>
                              <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                            </label>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 border-b-[1px] dark:border-gray-700 shadow-lg">
              {navigation.map((item, index) => (
                <Disclosure.Button key={index}>
                  <Link
                    href={item.href}
                    className={classNames(
                      path === item.href
                        ? "bg-gray-100 dark:bg-gray-700"
                        : " hover:bg-gray-100 dark:hover:bg-gray-700",
                      "block rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={path === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
              <div className="md:hidden">
                <SearchBox />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
const SearchBox = () => {
  return (
    <>
      <div className=" flex items-center gap-2 border px-2 py-1 rounded-md dark:border-gray-700">
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
        <input
          type="search"
          placeholder="Serach here.."
          className="outline-none bg-transparent w-full  placeholder-gray-300 placeholder:text-sm"
        />
      </div>
    </>
  );
};
