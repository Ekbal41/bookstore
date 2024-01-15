"use client";
import MainPage from "@/components/dashboard/MainPage";
import Products from "@/components/dashboard/Products";
import { Tab } from "@headlessui/react";
import {
  BanknotesIcon,
  HomeIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
export default function Dashboard() {
  return (
    <>
      <div className="pb-8 md:py-4 px-2 md:px-0">
        <div>
          <Tab.Group>
            <div className="md:grid md:grid-cols-5 mt-4">
              <Tab.List
                className={
                  "flex flex-wrap md:flex-col md:flex-nowrap gap-1 border-b-[1px] pb-4 md:border-b-0  md:col-span-1 md:border-r-[1px] md:pr-4"
                }
              >
                <div className="flex  flex-col gap-1 ">
                  <h1 className="mb-2  md:text-lg font-semibold ml-3">
                    Dashboard
                  </h1>
                  <Tab as="div" className={"outline-0"}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                            : "hover:bg-gray-100 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                        }
                      >
                        <HomeIcon
                          className="h-4 w-4 mr-2 inline-block mb-1"
                          aria-hidden="true"
                        />
                        Home
                      </button>
                    )}
                  </Tab>
                  <Tab as="div" className={"outline-0"}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start text-nowrap"
                            : "hover:bg-gray-100 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start text-nowrap"
                        }
                      >
                        <RectangleStackIcon
                          className="h-4 w-4 mr-2 inline-block mb-1 "
                          aria-hidden="true"
                        />
                        My Products
                      </button>
                    )}
                  </Tab>
                  <Tab as="div" className={"outline-0"}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                            : "hover:bg-gray-100 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                        }
                      >
                        <BanknotesIcon
                          className="h-4 w-4 mr-2 inline-block mb-1"
                          aria-hidden="true"
                        />
                        Earnings
                      </button>
                    )}
                  </Tab>
                </div>
                <div className="flex flex-col gap-1 ">
                  <h1 className=" mb-2  md:mt-6 md:text-lg font-semibold ml-3">
                    Settings
                  </h1>
                  <Tab as="div" className={"outline-0"}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                            : "hover:bg-gray-100 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                        }
                      >
                        <UserCircleIcon
                          className="h-4 w-4 mr-2 inline-block mb-1"
                          aria-hidden="true"
                        />
                        Profile
                      </button>
                    )}
                  </Tab>
                  <Tab as="div" className={"outline-0"}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                            : "hover:bg-gray-100 rounded-md px-3 py-1 md:py-2 text-sm w-full text-start"
                        }
                      >
                        <ShieldCheckIcon
                          className="h-4 w-4 mr-2 inline-block mb-1"
                          aria-hidden="true"
                        />
                        Account
                      </button>
                    )}
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className={"md:col-span-4 mt-4 md:mt-0 md:px-4 "}>
                <Tab.Panel>
                  <MainPage />
                </Tab.Panel>
                <Tab.Panel className={"outline-none"}>
                  <Products />
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae nostrum consectetur omnis corporis officiis vero
                    perspiciatis pariatur. Commodi culpa voluptatum distinctio
                    exercitationem fugiat corrupti recusandae laborum ut minus
                    nulla laboriosam totam eaque necessitatibus, iure dolores
                    nostrum alias aut quasi! Corporis nesciunt eum, quae
                    explicabo est minima totam dolores ipsam at.
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae nostrum consectetur omnis corporis officiis vero
                    perspiciatis pariatur. Commodi culpa voluptatum distinctio
                    exercitationem fugiat corrupti recusandae laborum ut minus
                    nulla laboriosam totam eaque necessitatibus, iure dolores
                    nostrum alias aut quasi! Corporis nesciunt eum, quae
                    explicabo est minima totam dolores ipsam at.
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae nostrum consectetur omnis corporis officiis vero
                    perspiciatis pariatur. Commodi culpa voluptatum distinctio
                    exercitationem fugiat corrupti recusandae laborum ut minus
                    nulla laboriosam totam eaque necessitatibus, iure dolores
                    nostrum alias aut quasi! Corporis nesciunt eum, quae
                    explicabo est minima totam dolores ipsam at.
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
