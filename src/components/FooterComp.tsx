"use client";

import React, { useState } from "react";
import ReactCountryFlagsSelect from "react-country-flags-select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Country } from "react-country-flags-select/dist/types/ReactSelectFlagsTypes";


function FooterComp() {
  const [selected, setSelected] = useState<Country | null>(null);

  return (
    <div className="px-5 bg-[#f2f7fe7f]">
      <div className="lg:flex lg:justify-center lg:flex-col items-center ">
        <div className="grid gap-3 border-b-2 py-[9vh] lg:flex lg:items-center lg:justify-between lg:gap-[15vw]">
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="flex flex-col">
              <ReactCountryFlagsSelect
                selected={selected}
                onSelect={setSelected} 
              />
              <p className="pt-2">Shipping to:</p>
            </div>
            <div className="flex flex-col">
              <ReactCountryFlagsSelect
                selected={selected}
                onSelect={setSelected}
              />
              <p className="pt-2">Language:</p>
            </div>
          </div>
          <p className="text-xs">
            &copy; 2024 | Examples Store. Inc. I All rights reserved.
          </p>
        </div>

        <div className="py-9">
          <div>
            <div className="sm:flex sm:items-center sm:justify-between sm:gap-2 lg:gap-[15vw]">
              <div>
                <p className="font-semibold py-1">
                  Subscribe to our newsletter
                </p>
                <p className="py-1 text-justify">
                  The latest news, products, and discounts, sent to your inbox
                  weekly.
                </p>
              </div>
              <div className="sm:flex sm:items-center sm:gap-5 py-4">
                <div className="py-1">
                  <Input placeholder ="Enter your email address" />
                </div>
                <div className="py-1">
                  <Button className="bg-[#6366F1] text-white w-[100%]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
