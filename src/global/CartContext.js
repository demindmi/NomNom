import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemCart: (item) => {},
  removeItemCart: (item) => {},
});

export default CartContext;
