import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../global/CartContext";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";

import css from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const total = ctx.totalAmount.toFixed(2);

  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [checkout, setCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const res = await fetch("https://nomnom-dmitrydemin-default-rtdb.firebaseio.com/Orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: ctx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
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

  const actionButtons = (
    <div className={css.actions}>
      <button className={css.button_alt} onClick={props.hideModal}>
        Close
      </button>
      <button className={css.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const cartModalContent = (
    <>
      {!cartIsEmpty && (
        <>
          {!checkout && cartItems}
          <div className={css.total}>
            <span>Total Amount</span>
            <span>${total}</span>
          </div>
          {checkout && <hr />}
          {checkout && <Checkout onCancel={props.hideModal} onConfirm={submitOrderHandler} />}
          {!checkout && actionButtons}
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
    </>
  );

  const submitting = <p>Sending order data...</p>;

  const submitted = <p>Order Sent! </p>;

  return (
    <Modal onClick={props.hideModal}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && submitting}
      {didSubmit && !isSubmitting && submitted}
    </Modal>
  );
};
//{hasItems && <button className={css.button}>Order</button>}

export default Cart;
