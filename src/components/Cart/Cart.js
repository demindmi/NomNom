import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../global/CartContext";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const total = ctx.totalAmount.toFixed(2);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  useEffect(() => {
    const notEmpty = total > 0;
    if (notEmpty) {
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  }, [total]);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItemCart(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItemCart({ ...item, amount: 1 });
  };

  const DemoEnd = () => {
    alert("This is the end of the demo");
  };

  const cartItems = (
    <ul className={`${css.cartItem}`}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          mealName={item.mealName}
          amount={item.amount}
          mealCost={item.mealCost}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.hideModal}>
      {!cartIsEmpty && (
        <>
          {cartItems}
          <div className={css.total}>
            <span>Total Amount</span>
            <span>${total}</span>
          </div>
          <div className={css.actions}>
            <button className={css.button_alt} onClick={props.hideModal}>
              Close
            </button>
            <button className={css.button} onClick={DemoEnd}>
              Order
            </button>
          </div>
        </>
      )}
      {cartIsEmpty && (
        <>
          <div className={css.empty}>
            <span>Your cart is empty :(</span>
          </div>
          <div className={css.actions}>
            <button className={css.button_alt} onClick={props.hideModal}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};
//{hasItems && <button className={css.button}>Order</button>}

export default Cart;
