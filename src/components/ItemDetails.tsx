"use client";
import React from "react";
import { PiCaretLeft } from "react-icons/pi";
import { objData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { objDataTypes } from "@/types";
import FooterComp from "./FooterComp";
import NavBar from "./NavBar";
import { add } from "@/redux/itemsSlice";
import { useAppDispatch, useAppSelector } from "@/hook/hook";

function ItemDetails({ itemId }: { itemId: string }) {
  const dispatch = useAppDispatch();
  const fromStore = useAppSelector((store) => store.data);
  const data = objData.find((data) => data.id === Number(itemId));

  console.log(fromStore, "fromStore");


  return (
    <div className="px-5">
      <NavBar />
      <div>
        <div className="flex items-center gap-2 py-[6vh]">
          <PiCaretLeft className="text-2xl" />
          <Link href="/">Back to all products</Link>
        </div>
        <div className=" sm:grid sm:grid-cols-2">
          <div>
            {data?.image && (
              <Image
                src={data.image}
                alt="product-image"
                priority
                className="w-[100%] min-w-[100px] max-w-[400px]"
              />
            )}
          </div>
          <div>
            <div className="flex flex-col p-3 gap-2">
              <h3 className="text-sm text-[#8485877e]">BRAND</h3>
              <p className="text-3xl">{data?.name}</p>
              <p className="text-xl py-1">{data?.serialNo}</p>
              <p className="text-[18px]">{data?.details}</p>
            </div>
            <div className="flex items-center justify-between border-t-2 pb-[20vh] text-[18px] pt-5">
              <div className="flex items-center gap-4 ">
                <p className="text-blue-400 text-[20px]">${data?.price}</p>
                <p className="text-[#8485877e] line-through text-[18px]">
                  ${data?.oldPrice}
                </p>
              </div>
              {data?.id && (
                <button
                  className="px-3 py-1 bg-black text-white rounded-md"
                  onClick={() =>
                    dispatch(add({ data: data as objDataTypes, id: data.id }))
                  }>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default ItemDetails;
