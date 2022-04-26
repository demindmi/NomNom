import React, { useContext } from "react";
import CartContext from "../../global/CartContext";
import css from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";

const FoodItem = (props) => {
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    ctx.addItemCart({
      mealName: props.item.mealName,
      mealDesc: props.item.mealDesc,
      mealCost: props.item.mealCost,
      id: props.item.id,
      amount: amount,
      // mealImage: "",
    });
  };

  return (
    <li className={css.FoodItem}>
      <div>
        <h3>{props.item.mealName} </h3>
        <div className={css.description}> {props.item.mealDesc}</div>
        <div className={css.cost}>
          {" "}
          <span>$ </span>
          {props.item.mealCost}
        </div>
        {/* {props.item.mealImage} */}
      </div>
      <FoodItemForm addItemHandler={addToCartHandler} />
    </li>
  );
};

export default FoodItem;
