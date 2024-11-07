import { objData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemDataComp({ selected }: { selected: string }) {
  const itemSelected = objData.filter((items) =>
    items.item?.includes(selected.toLowerCase())
  );
  console.log(itemSelected, "itemSelected");

  console.log(selected, "selected");

  if (itemSelected) {
    return (
      <div className="flex flex-col items-center gap-[4vh] pt-[20vh] tb-[10vh] md:grid md:grid-cols-3 px-3">
        {itemSelected.map((obj) => {
          return (
            <Link href={`/${obj.id}`} key={obj.id} className="border border-[#e5e7e] rounded-md hover:shadow-lg">
              <div className="px-[25vw] md:px-0 py-8 flex flex-col  ">
                <div className="">
                  <Image src={obj.image} alt={obj.name} className="py-[10vw]" />
                </div>
              </div>
              <div className="pl-3">
                <p>{obj.name}</p>
                <div className="flex items-center pt-4">
                  <p className="text-[#6366F1]">${obj.price}</p>
                  <p className="text-[#8485877e] line-through pl-2">
                    ${obj.oldPrice}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[4vh] pt-[20vh] tb-[10vh]px-3">
      {objData.map((obj) => {
        return (
          <Link  href={`/${obj.id}`} key={obj.id} className="border border-[#e5e7e] rounded-md hover:shadow-lg ">
            <div className="px-[25vw] py-8 flex flex-col  ">
              <div className="">
                <Image src={obj.image} alt={obj.name} className="py-[10vw] w-[100%]" />
              </div>
            </div>

            <div className="pl-3">
              <p>{obj.name}</p>
              <div className="flex items-center pt-4">
                <p className="text-[#6366F1]">${obj.price}</p>
                <p className="text-[#8485877e] line-through pl-2">
                  ${obj.oldPrice}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemDataComp;
