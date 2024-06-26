import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        state.cartProducts = state.cartProducts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQuantity * item.price;
            return {
              ...item,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        console.log(state.cartProducts);
      } else {
        state.cartProducts.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },

    handleQuantity: (state, action) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (item.id === action.payload.id) {
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            item.quantity++;
            tempTotalPrice = item.quantity * item.price;
          }
          if (action.payload.type === "DEC") {
            if (item.quantity > 1) {
              item.quantity--;
              tempTotalPrice = item.quantity * item.price;
            }
          }
          return { ...item, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
    },
    getCartTotal: (state) => {
      let {totalPrice, totalQuantity  } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const {price, quantity} = cartItem;
          const itemTotal = price * quantity
          cartTotal.totalPrice += itemTotal
          cartTotal.totalQuantity += quantity
          return cartTotal
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
  },
});

export const { addToCart, removeFromCart, handleQuantity, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
