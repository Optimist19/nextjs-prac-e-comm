"use client";
import { BreadcrumbCollapsed } from "@/components/Breadcrumb";
import ImageLogo from "@/components/ImageLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/hook/hook";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { PiCaretLeftBold } from "react-icons/pi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { useState } from "react";
import { objData } from "@/data";
import { useRouter } from "next/navigation";

function CheckOut() {
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);
  const [order, setOrder] = useState(false);

  const stateFromStore = useAppSelector((store) => store.data);
  const router = useRouter();

  const handleOpenAccordion = (id: string) => {
    setOpenAccordion(id);
  };

  function placeOrder() {
    setOrder(true);
    router.push("/invoice");
  }
  // console.log(openAccordion, "openAccordion");

  return (
    <div>
      <div className="">
        <div className="py-[3vh] px-[5vw] md:hidden">
          <ImageLogo />
        </div>
        <div className="flex flex-col   md:grid md:grid-cols-2 h-[100vh]">
          <div className=" h-[] px-[5vw]  bg-[#f8f8f8] order-1 md:order-0">
            <div className="py-[3vh] hidden md:block">
              <ImageLogo />
            </div>
            <div className="flex flex-col gap-[6vh] py-2">
              <div className="">
                <div>
                  <p className="font-bold text-xl">Order summary</p>
                  {stateFromStore.listItems.length === 1 ? (
                    <p className="text-[#878888]">
                      Your shopping cart contains{" "}
                      {stateFromStore.listItems.length} items{" "}
                    </p>
                  ) : (
                    <p className="text-[#878888]">
                      Your shopping cart contains{" "}
                      {stateFromStore.listItems.length} items{" "}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-b-2">
                {stateFromStore.listItems.map((item) => {
                  return (
                    <div className="" key={item.id}>
                      <div className="flex items-center justify-between border-b-2">
                        <div>
                          <Image
                            src={item.image}
                            className="w-[100%]" alt={item.name}
                            priority
                          />
                        </div>
                        <div>
                          <p className="text-[#878888]">{item.serialNo}</p>
                          <p className="font-bold">{item.name}</p>
                          <p>
                            Quantity: <span>{item.quantity}</span>
                          </p>
                        </div>
                        <div>
                          <p>${item.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-[4vh]">
              <div className="flex justify-end ">
                <div className="w-[100%] md:w-[80%] ">
                  <div className="flex items-center border-b-2 pb-[4vh] ">
                    <Input placeholder="Gift card or coupon code " />
                    <Button className="bg-[#6366F1]">Apply</Button>
                  </div>

                  <div className="py-[4vh] flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold">Subtotal</p>
                      <p>${stateFromStore.totalPrice}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold">Shipping</p>

                      <p>Free</p>
                    </div>
                    <div className="flex items-center justify-between pb-[4vh]">
                      <p className="font-bold">Tax</p>
                      <p>$0.00</p>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-b-2 py-[4vh]">
                      <p>Total</p>
                      <p className="font-bold">${stateFromStore.totalPrice}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs pt-5">
                      <PiCaretLeftBold />
                      <p>Return to cart</p>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="border-t-2 flex items-center gap-3 pt-4">
                <h6>Powered by</h6>
                <div className="w-[17vw]">
                  <ImageLogo />
                </div>
              </footer>
            </div>
          </div>

          <div className=" h-[] px-[5vw] order-0 md:order-1 md:pt-8 ">
            <div className="">
              <div className="md:flex md:items-center md:justify-between md:border-b-2 border-t-2 md:border-t-0">
                <div className="flex items-center justify-between">
                  <div className="py-1  ">
                    <h2 className="text-4xl pb-1 font-medium ">
                      Checkout
                    </h2>
                  </div>
                  <p className=" md:hidden font-semibold">$58.00</p>
                </div>
                <p className="text-[#767657]  py-2">#767657657</p>
              </div>
              <div className="hidden md:block pt-2">
                <BreadcrumbCollapsed
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                />
              </div>

              <div>
                {/* <Accordion type="single" collapsible className="w-full"> */}
                <Accordion 
                  value={openAccordion}
                  onValueChange={setOpenAccordion}
                  className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-medium text-xl">
                      Customer
                    </AccordionTrigger>
                    <AccordionContent className="yes pl-4">
                      Fill in your billing/shipping address
                    </AccordionContent>
                    <AccordionContent>
                      {/* <Input /> */}

                      <div className="p-4">
                        <TextField
                          id="outlined-basic"
                          label="Your email address"
                          variant="outlined"
                          className="w-[100%]"
                        />
                      </div>
                    </AccordionContent>
                    <AccordionContent>
                      <div>
                        <p className="pl-4">Billing Address</p>

                        <div className="flex items-center gap-5 p-4">
                          <div className="">
                            <TextField
                              id="outlined-basic"
                              label="First Name"
                              variant="outlined"
                              className="w-[]"
                            />
                          </div>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Last Name"
                              variant="outlined"
                              className="w-[]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Address line 1"
                              variant="outlined"
                              className="w-[100%]"
                            />
                          </div>
                          <div className="py-4">
                            <TextField
                              id="outlined-basic"
                              label="Address line 2"
                              variant="outlined"
                              className="w-[100%]"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-5">
                            <div>
                              <TextField
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                className="w-[]"
                              />
                            </div>
                            <div>
                              <FormControl fullWidth>
                                <InputLabel
                                  id="demo-simple-select-label"
                                  className="px-4">
                                  Coountry
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value="Nigeria"
                                  label="Age">
                                  <MenuItem value={10}>Nigeria</MenuItem>
                                  <MenuItem value={20}>Mayotte</MenuItem>
                                  <MenuItem value={30}>Malawi</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-5 p-4">
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Province/State"
                              variant="outlined"
                              className="w-[]"
                            />
                          </div>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label="Zip Code"
                              variant="outlined"
                              className="w-[]"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                    <AccordionContent>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenAccordion("item-2");
                        }}
                        className="bg-[#6366F1]">
                        Continue to deliver
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-medium text-xl">
                      Delivery
                    </AccordionTrigger>
                    <AccordionContent className="pb-3">
                      <p>Select a shipping method</p>
                    </AccordionContent>
                    <AccordionContent className="pt-[4vh]">
                      <div className="w-[15vw] border border-[#6366F1] border-2  rounded-sm	 py-3 px-3">
                        <p className="font-medium ">Standard Shipping FREE</p>
                      </div>

                      <div className="pt-8 overflow-auto h-[40vh] overflow-x-auto ">
                        {objData.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="border-t-2 border-dashed flex items-center py-4">
                              <div className="border p-1 rounded-md">
                                <img
                                  src={item.image.src}
                                  alt={item.name}
                                  className="w-[50px]"
                                />
                              </div>

                              <div className="flex flex-col gap-1 pl-1">
                                <p className="font-medium">{item.name}</p>
                                <p className=" text-[#878888]">
                                  Quantity{item.quantity}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                    <AccordionContent>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenAccordion("item-3");
                        }}
                        className="bg-[#6366F1]">
                        Continue to deliver
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-medium text-xl">
                      Payment
                    </AccordionTrigger>
                    <AccordionContent>Select a paymnet method</AccordionContent>
                    <AccordionContent>
                      <div className=" border border-[#6366F1] border-2  rounded-sm	 py-3 px-3 flex flex-col gap-2">
                        <p className="font-semibold">Wire Transfer</p>
                        <p className="text-[#878888]">
                          Upon order confirmation, you&apos; ll receive
                          instructions to complete payment.
                        </p>
                      </div>
                    </AccordionContent>
                    <AccordionContent>
                      <Button
                        className="bg-[#6366F1] w-[100%] py-1"
                        onClick={placeOrder}>
                        {order ? "Ordering" : "Place order"}
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
