"use client";

import React from "react";
import Image from "next/image";

import { BsCart4 } from "react-icons/bs";
import { useAppSelector } from "@/hook/hook";
import Link from "next/link";
import ImageLogo from "./ImageLogo";

function NavBar() {
  const fromStore = useAppSelector((state) => state.data);
  return (
    <div className="w-[100%]">
      <div className="px-5 lg:flex lg:justify-center lg:items-center lg:flex-col">
        <header className="flex items-center justify-between border-b-2 py-8 ">
          <div className="lg:pr-[370px]" >
            <Link href="/">
            <ImageLogo />
            
            </Link>
          </div>
          <div className="relative lg:pl-370px]">
            <Link href="/cart">
              <BsCart4 className="text-6xl pr-3 md:hidden  " />
              <div className="flex items-center">
                <span className="absolute top-[-1vh] right-[0.5vw] pr-2.5 pl-2.5 pt-2 pb-2 bg-indigo-500 text-gray-50 text-sm rounded-[50%] move-up-down">
                  {fromStore.listItems.length}
                </span>
                <span className="hidden md:block md:pr-[5vw]">
                  Shopping Bag
                </span>
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
