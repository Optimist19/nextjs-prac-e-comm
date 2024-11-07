"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hook/hook";
import { RiDeleteBinLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
// import { objData } from "@/data";
import { decrementItem, incrementItem } from "@/redux/itemsSlice";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import FooterComp from "@/components/FooterComp";

function CartPage() {
  const dispatch = useAppDispatch();
  const dataFromStore = useAppSelector((state) => state.data);

  // const [itemscounter, setItemscounter] = useState(0)

  console.log(dataFromStore, "dataFromStore");

  return (
    <div>
      <NavBar />
      <div className="px-5 break-point-grid pt-5">
        <div className="px-5">
          {dataFromStore.listItems.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b-2 py-9  grid grid-flow-col items-center ">
                <div className="w-[26vw]">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-[100%]  min-w-[100px] max-w-[200px]"
                  />
                </div>
                {/* <div></div> */}
                <div className="flex flex-col gap-[8vh] justify-center">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                    <div>
                      <RiDeleteBinLine className="lg:text-[25px]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Button
                        onClick={() => dispatch(decrementItem(item.id))}
                        className="bg-[#6366F1]">
                        -
                      </Button>
                      <Button className="bg-white text-black border ">
                        {item.quantity}
                      </Button>
                      <Button
                        onClick={() => dispatch(incrementItem(item.id))}
                        className="bg-[#6366F1]">
                        +
                      </Button>
                    </div>
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-7 checkout">
          <div className="flex items-center justify-between border-b-2 py-7">
            <p>Subtotal</p>
            <p>${dataFromStore.totalPrice}</p>
          </div>

          <div className="flex flex-col py-7">
            <p>Have a promo code?</p>
            <div className="flex items-center border-b-2 pb-7 pt-2">
              <Input placeholder="Gift card or coupon code" />
              <Button>Apply</Button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between p">
              <p>Total</p>
              <p>${dataFromStore.totalPrice}</p>
            </div>

            <div className="flex flex-col">
              <p className="py-[6vh]">
                Tax included and shipping calculated at checkout
              </p>
              <Button className="bg-[#6366F1]">
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default CartPage;
