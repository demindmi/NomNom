import { useContext, useEffect, useState } from "react";

// import CartContext from "../../store/cart-context";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // const cartCtx = useContext(CartContext);

  // const { items } = cartCtx;

  // const numberOfCartItems = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  // const btnClasses = `${css.button} ${btnIsHighlighted ? css.bump : ""}`;

  // useEffect(() => {
  //   if (items.length === 0) {
  //     return;
  //   }
  //   setBtnIsHighlighted(true);

  //   const timer = setTimeout(() => {
  //     setBtnIsHighlighted(false);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [items]);

  return (
    <button onClick={props.onClick}>
      <span className={css.icon}>
        <img
          className={css.icon}
          src={process.env.PUBLIC_URL + "/shopping-cart.png"}
          alt="cart-icon"></img>
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
