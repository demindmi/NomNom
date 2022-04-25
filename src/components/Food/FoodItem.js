import React, { useRef, useContext } from "react";
import CartContext from "../../global/CartContext";
import css from "./FoodItem.module.css";

const FoodItem = (props) => {
  const counterRef = useRef();
  // const ctx = useContext(CartContext);

  const addItemHandler = (event) => {
    console.log("hi");
    event.preventDefault();
    const amount = +counterRef.current.value;
    if (amount === 0) {
      // console.log(ctx);
      return false;
    }
    // ctx.addItemCart({
    //   mealName: props.item.mealName,
    //   mealDesc: props.item.mealDesc,
    //   mealCost: props.item.mealCost,
    //   amount: amount,
    //   // mealImage: "",
    // });
    // setTimeout(() => {
    //   console.log(props.item.mealName);
    //   console.log(ctx);
    // }, 2000);
  };

  return (
    <li className={css.FoodItem}>
      <div>
        <h3>{props.item.mealName}</h3>
        <div className={css.description}> {props.item.mealDesc}</div>
        <div className={css.cost}> ${props.item.mealCost}</div>
        {/* {props.item.mealImage} */}
      </div>
      <form className={css.form}>
        <div className={css.Input}>
          <label>ADD ITEM</label>
          <input min="0" max="5" type="number" ref={counterRef} />
        </div>
        <button type="submit" onClick={addItemHandler}>
          ADD ITEM
        </button>
      </form>
    </li>
  );
};

export default FoodItem;
