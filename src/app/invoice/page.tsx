"use client";

import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ImageLogo from "@/components/ImageLogo";
import { useAppSelector } from "@/hook/hook";
import Image from "next/image";
// import { objData } from "@/data";

function InvoicePage() {
  const stateFromStore = useAppSelector((state) => state.data);

  return (
    <div>
      <div>
        <div>
          <div className="w-[25vw] py-[4vh] pl-[8vw]">
            <ImageLogo />
          </div>
          <div className="flex justify-center flex-col items-center gap-[2vh] py-[6vh]">
            <IoCheckmarkCircleOutline className="text-[250px]  text-green-700" />
            <p className="text-[40px]">Thank you for your order!</p>
            <p className="text-[#878888] text-[20px]">
              Order confirmation number #{stateFromStore.invoice}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 bg-[#f8f8f8] pb-[40vh]">
          <div className="order-1">
            <div className="px-[6vw]">
              <p className="font-semibold text-2xl py-4">Summary</p>
              {stateFromStore.listItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border-b-2 py-3 md:grid md:grid-cols-[20%_80%]">
                    <div className="w-[5vw] p-2 bg-white rounded-md">
                      <Image
                        src={item.image}
                        priority
                        alt="product-image"
                        className="w-[]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[12px] text-[#878888]">
                        {item.serialNo}
                      </p>
                      <div className="font-semibold flex items-center justify-between">
                        <div>
                          <p>{item.name}</p>
                        </div>
                        <div>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      <div>
                        <button className="bg-[#bbb9bb] rounded-sm text-[#878888] px-3 py-1">
                          Quantity:{item.quantity}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex  justify-end pr-[6vw]">
              <div className="w-[80%] ">
                <div className="flex justify-between items-center">
                  <p>Subtotal</p>
                  <p>${stateFromStore.totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Shipping</p>
                  <p>$7.00</p>
                </div>
                <div className="flex justify-between items-center  border-b-2 pb-3">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>

                <div className="flex justify-between items-center py-[4vh]">
                  <p>Total</p>
                  <p>${stateFromStore.totalPrice + 7.0}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col md:gap-3 px-11 order-0 py-5">
            <p className="font-semibold text-2xl">Customer</p>
            <div className="grid gap-1">
              <p>Email:</p>
              <p className="font-semibold">oluwausfgus@gmia.com</p>
            </div>
            <div  className="grid gap-5">
              <div className="grid gap-1">
                <p>Shipped to:</p>
                <div className="border p-3">
                  <p>Oluwasegun Bamidele</p>
                  <p>
                    No 12, Alhaji Sokoya street, Mafoluku Oshodi, Lagost state,
                    afaaqfaa 100261 Oshodi - Lagos (NG) 5656768
                  </p>
                </div>
              </div>

              <div className="grid gap-1">
                <p>Payment:</p>
                <p className="border p-3">Wire transfer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 py-[6vh] fixed bottom-0  gap-2 right-[6vw] left-[6vw] bg-[#f8f8f8]">
        <div className=" flex items-center gap-3">
          <p>Powered by</p>
          <div className="w-[7vw]">
            <ImageLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
