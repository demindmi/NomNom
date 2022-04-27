import React, { useReducer } from "react";
import CartContext from "./CartContext";

//initialize the state with this
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedTotalAmount; // Variable to hold how much do all items in the cart cost
  let updatedItem; // Variable to hold the item to be updated in the cary
  let updatedItems = [...state.items]; // getting all items from current items in the state list and assigning them to updatedItems variable

  // switch statement to determine what action to proceed with
  switch (action.type) {
    //  if we want to add item
    case "ADD_ITEM":
      const itemInCartIndex = state.items.findIndex(
        // Checking if item with this id (passed via action) has the same ID as something in the current cart (state)
        (item) => {
          return item.id === action.item.id;
        }
      );
      const itemInCart = state.items[itemInCartIndex]; // if ID's matched, we use the found index to locate this item in the array of items
      // getting new total cost for cart items by multiplying number of just added items by their cost
      updatedTotalAmount =
        state.totalAmount + action.item.mealCost * action.item.amount;
      // if we have item with this ID present in the cart:
      if (itemInCart) {
        // updating the item amount
        updatedItem = {
          ...itemInCart, // ! duplicating object using spread operator
          amount: itemInCart.amount + action.item.amount, // updating amount of said item
        };
        // using the same index we found before, we are updating the quantity of the items in the cart
        updatedItems[itemInCartIndex] = updatedItem;
      } else {
        // in case this item is fresh in the cart, we will simply add it to our state variable
        updatedItems = state.items.concat(action.item);
      }
      break;

    // If we want to remove item
    case "REMOVE_ITEM":
      const ItemInCartIndex = state.items.findIndex(
        // Checking if item with this id (passed via action) has the same ID as something in the current cart (state)
        (item) => item.id === action.id
      );
      const ItemInCart = state.items[ItemInCartIndex]; // if ID's matched, we use the found index to locate this item in the array of items

      // we subtract from total amount in the cart amount that this item currently has
      updatedTotalAmount = state.totalAmount - ItemInCart.mealCost;

      if (ItemInCart.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        updatedItem = {
          ...ItemInCart, // ! duplicating object using spread operator
          amount: ItemInCart.amount - 1, // updating amount of said item
        };
        updatedItems = [...state.items];
        updatedItems[ItemInCartIndex] = updatedItem;
      }
      break;

    // if noon of the cases match, we simply return current state as is
    default:
      return defaultCartState;
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
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

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
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