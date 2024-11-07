
import React from "react";
import ItemDataComp from "./ItemDataComp";

function ItemComp({ itemSelected }: { itemSelected: string }) {

  return (
  <div>
    <ItemDataComp selected={itemSelected}/>
  </div>
  );
}

export default ItemComp;
