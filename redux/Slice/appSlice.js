import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // state.items = [...state.items, action.payload];
      const findIndex = state.items.findIndex(
        (product) => product?.product?.id === action.payload.product?.id
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        newCart[findIndex].quantity += 1;
      } else {
        newCart = [...state.items, action.payload];
      }
      state.items = newCart;
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload);
      const findIndex = state.items.findIndex(
        (product) => product?.product?.id === action.payload
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        if (newCart[findIndex].quantity > 1) {
          newCart[findIndex].quantity -= 1;
          console.log(newCart[findIndex].quantity);
        } else {
          newCart.splice(findIndex, 1);
        }
      }
      state.items = newCart;
      console.log(newCart);
    },
    removeFulProduct: (state, action) => {
      console.log(action.payload);

      const findIndex = state.items.findIndex(
        (product) => product?.product?.id === action.payload
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        newCart.splice(findIndex, 1);
      }
      state.items = newCart;
    },
  },
});

export const { addToBasket, removeFromBasket, removeFulProduct } =
  appSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.app.items;
export const selectTotal = (state) =>
  state.app.items.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

export default appSlice.reducer;
