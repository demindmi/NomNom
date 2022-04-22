import React from "react";
import Input from "../UI/Input";
import css from "./FoodItem.module.css";

const FoodItem = (props) => {
  return (
    <li className={css.FoodItem}>
      <div>
        <h3>{props.item.mealName}</h3>
        <div className={css.description}> {props.item.mealDesc}</div>
        <div className={css.cost}> ${props.item.mealCost}</div>
        {/* {props.item.mealImage} */}
      </div>
      <form className={css.form}>
        <Input label="Amount" type="number" />
        <button> ADD ITEM </button>
      </form>
    </li>
  );
};

export default FoodItem;
