import React, { useReducer } from "react";
import CartContext from "./CartContext";

//initialize the state with this
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let UpdatedAmount; // Variable to hold how much do all items in the cart cost
  let updatedItems; // Variable to hold what needs to be updated in the cart

  // switch statement to determine what action to proceed with
  switch (action.type) {
    //  if we want to add item
    case "ADD_ITEM":
      // getting new total cost for cart items
      UpdatedAmount = action.item.mealCost * action.item.amount;

      // Checking if item with this id (passed via action) has the same ID as something in the current cart (state)
      const itemInCartIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      // if ID's matched, we use the found index to locate this item in the array of items
      const itemInCart = state.items[itemInCartIndex];

      // if such item is present:
      if (itemInCart) {
        // updating the item amount
        const updatedItem = {
          ...itemInCart, // ! duplicating object using spread operator
          amount: itemInCart.amount + action.item.amount, // updating amount of said item
        };

        // getting all items from current items in the state list and assigning them to updatedItems variable
        updatedItems = [...state.items];
        // using the same index we found before, we are updating the quantity of the items in the cart
        updatedItems[itemInCartIndex] = updatedItem;
      } else {
        // in case this item is fresh in the cart, we will simply add it to our state variable
        updatedItems = state.items.concat(action.item);
      }
      break;

    // If we want to remove item
    case "REMOVE_ITEM":
      UpdatedAmount = action.item.mealCost * action.item.amount;
      const UpdatedItems = state.items.concat(action.item);
      return {
        items: UpdatedItems,
        totalAmount: UpdatedAmount,
      };
    // if noon of the cases match, we simply return current state as is
    default:
      return defaultCartState;
  }

  return {
    items: updatedItems,
    totalAmount: UpdatedAmount,
  };
};

//--------------------------------------------//
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE_ITEM", item: item });
  };

  const contextOfCart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemCart: addItemCartHandler,
    removeItemCart: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={contextOfCart}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// value = { contextOfCart };
