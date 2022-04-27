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
      mealCost: props.item.mealCost.toFixed(2),
      id: props.item.id,
      amount: amount,
      // mealImage: "",
    });
  };

  return (
    <li className={css.FoodItem}>
      <div>
        <h3>
          {props.item.mealName}{" "}
          <span className={css.cost}>
            <span className={css.dollar}>&nbsp;$</span>
            {props.item.mealCost.toFixed(2)}
          </span>
        </h3>
        <div className={css.description}> {props.item.mealDesc}</div>
        {/* {props.item.mealImage} */}
      </div>
      <FoodItemForm addItemHandler={addToCartHandler} />
    </li>
  );
};

export default FoodItem;
