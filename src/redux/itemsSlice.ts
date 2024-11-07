import { goods, objDataTypes } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: goods = {
  listItems: [],
  numberOfItems: 0,
  totalPrice: 0
};

export const ItemsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (
      state,
      actions: PayloadAction<{ data: objDataTypes; id: number }>
    ) => {
      const { data, id } = actions.payload;
      const existingItem = state.listItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
        state.totalPrice += Number(existingItem.price); // Add item price to total price
      } else {
        data.quantity = 1; // Initialize quantity for a new item
        state.listItems.push(data);
        state.totalPrice += Number(data.price); // Add new item price to total price
      }
    },

    incrementItem: (state, actions: PayloadAction<number>) => {
      const id = actions.payload;
      const updatedCartArray = state.listItems.map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity + 1;

          state.totalPrice += Number(item.price); // Add item price to total price

          return {
            ...item,
            quantity: updatedQuantity
          };
        }
        return item;
      });

      state.listItems = updatedCartArray;
    },

    decrementItem: (state, actions: PayloadAction<number>) => {
      const id = actions.payload;
      const updatedCartArray = state.listItems.map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;

          // Only subtract from total price if quantity > 1 to avoid negative or zero quantity
          if (updatedQuantity >= 1) {
            state.totalPrice -= Number(item.price);
          }

          return {
            ...item,
            quantity: updatedQuantity < 1 ? 1 : updatedQuantity
          };
        }
        return item;
      });

      state.listItems = updatedCartArray;
    }
  }
});

// Action creators are generated for each case reducer function
export const { add, incrementItem, decrementItem } = ItemsSlice.actions;

export default ItemsSlice.reducer;














// // import { objData } from "@/data";
// import { goods, objDataTypes } from "@/types";
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// const initialState: goods = {
//   listItems: [],
//   numberOfItems: 0,
//   totalPrice: 0
// };

// export const ItemsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     add: (
//       state,
//       actions: PayloadAction<{ data: objDataTypes; id: number }>
//     ) => {
//       const { data, id } = actions.payload;
//       const existingItem = state.listItems.find((item) => item.id === id);

//       if (existingItem) {
//         let count = 0;

        
//         existingItem.quantity = count++;
//         state.totalPrice = Number(existingItem.price) * existingItem.quantity
        
//       } else {
//         state.totalPrice = 
//         state.listItems.push(data);
//       }
//     },

//     incrementItem: (state, actions: PayloadAction<number>) => {
//       const id = actions.payload;
//       const updatedCartArray = state.listItems.map((item) => {
//         if (item.id === id) {
//           const updatedQuantity = item.quantity + 1;

//           state.totalPrice = state.totalPrice * updatedQuantity

//           return {
//             ...item,
//             quantity: updatedQuantity
//           };
//         }
//         return item;
//       });


//       state.listItems = updatedCartArray;

//     },

//     decrementItem: (state, actions: PayloadAction<number>) => {
//       const id = actions.payload;
//       const updatedCartArray = state.listItems.map((item) => {
//         if (item.id === id) {
//           const updatedQuantity = item.quantity - 1;

//           state.totalPrice = state.totalPrice * updatedQuantity

//           return {
//             ...item,
//             quantity: updatedQuantity < 1 ? 1 : updatedQuantity
//             // price: updatedQuantity * item?.price
//           };
//         }
//         return item;
//       });

//       state.listItems = updatedCartArray;

//       // console.log(state.listItems, "state.listItems")
//     }
//   }
// });

// // Action creators are generated for each case reducer function
// export const { add, incrementItem, decrementItem } = ItemsSlice.actions;

// export default ItemsSlice.reducer;
