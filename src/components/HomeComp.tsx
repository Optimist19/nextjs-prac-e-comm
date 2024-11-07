"use client";
import React, { useState } from "react";
import backImage from "../../public/image/avif/bgimage.avif";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import { category, gender } from "@/data";
import { categoryTypes, genderTypes } from "@/types";
import ItemComp from "./ItemComp";
// import { useAppDispatch, useAppSelector } from "@/hook/hook";
// import { add } from "@/redux/itemsSlice";

function HomeComp() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const [items, setItems] = useState("");

  // const dispatch = useAppDispatch()
  // const selector = useAppSelector((store)=> store)
  // console.log(selector, "nice")
  // useEffect(()=>{

  // }, [])

  const bgImage = {
    backgroundImage: `url(${backImage.src})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement>,
    number: number,
    pickedItem: string
  ): void => {
    console.log(event);
    setSelectedItem(number);
    setItems(pickedItem);
  };

  console.log(items);

  return (
    <div>
      <h1 className="text-black text-5xl font-bold text-center pt-[9vh] pb-[5vh]">
        Hey, there!
      </h1>
      <div style={bgImage} className="text-xl">
        <div className="px-5">
          <p className="p-2 ">
            This ecommerce store is powered by Commerce Layer— an API-first
            global commerce solution that can easily make any digital experience
            shoppable. This demo was built with Nextjs and Sanity.
          </p>

          <div className="flex items-center gap-5 pt-[6vh]">
            <button className="bg-black text-white p-3 rounded-md font-bold">
              Start shopping
            </button>
            <div className="flex items-center p-3 font-bold">
              <span>Learn more </span>
              <MdOutlineArrowRightAlt className="" />
            </div>
          </div>
        </div>
      </div>


      <div className="md:grid md:grid-cols-[25%_75%]">
        {/* <div className="bg-[#F0F8FF]"> */}
        <div className="bg-[#faebd7 ]">
          <h3 className="pt-[13vh] p-3 text-[#a2a3a57e]">CATEGORY</h3>
          <div className="px-3">
            {category.map((cart: categoryTypes) => {
              return (
                <ul key={cart.id}>
                  <li
                    onClick={(event) => handleClick(event, cart.id, cart.name)}
                    className={`cursor-pointer py-4 px-5 ring-2 ring-slate-100 rounded-sm my-2 flex items-center justify-between ${
                      selectedItem === cart.id ? "bg-slate-400" : ""
                    }`}>
                    <span
                      className={`${
                        cart.number === 0 ? "text-gray-500" : "text-black"
                      } capitalize`}>
                      {cart.name}
                    </span>
                    <span
                      className={`${
                        cart.number === 0 ? "bg-gray-500" : "bg-black"
                      }  text-white  p-[12px] rounded-[70%] ${
                        selectedItem === cart.id ? "bg-black" : "bg-gray-500"
                      }`}>
                      {cart.number}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>

          <h3 className="pt-[13vh] p-3 text-[#a2a3a57e]">GENDER</h3>
          <div className="px-3">
            {gender.map((cart: genderTypes) => {
              return (
                <ul key={cart.id} className="">
                  <li
                    onClick={(event) => handleClick(event, cart.id, cart.name)}
                    className={`cursor-pointer py-4 px-5 ring-2 ring-slate-100 rounded-sm my-2 flex items-center justify-between ${
                      selectedItem === cart.id ? "bg-slate-400" : ""
                    }`}>
                    <span
                      className={`${
                        cart.number === 0 ? "text-gray-500" : "text-black"
                      } capitalize`}>
                      {cart.name}
                    </span>
                    <span
                      className={`${
                        cart.number === 0 ? "bg-gray-500" : "bg-black"
                      }  text-white  p-[12px] rounded-[70%] ${
                        selectedItem === cart.id ? "bg-black" : "bg-gray-500"
                      }`}>
                      {cart.number}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div>
          <ItemComp itemSelected={items} />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
