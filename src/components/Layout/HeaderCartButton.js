import { useContext, useEffect, useState } from "react";

import CartContext from "../../global/CartContext";
import css from "./HeaderCartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

const HeaderCartButton = (props) => {
  const [btnHover, setHoverOn] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartBadge = <FaShoppingCart className={css.icon} />;

  const { items } = cartCtx;

  const itemsTotal = items.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  const btnClasses = `${css.button} ${btnHover ? css.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHoverOn(true);

    const timer = setTimeout(() => {
      setHoverOn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={css.icon}>{cartBadge}</span>
      <span className={css.span}>Your Cart</span>
      <span className={css.badge}>{itemsTotal}</span>
    </button>
  );
};

export default HeaderCartButton;
