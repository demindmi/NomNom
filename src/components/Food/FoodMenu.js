import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import css from "./FoodMenu.module.css";
import { MEALS } from "../../global/dummyData";

const FoodMenu = () => {
  const menuItems = MEALS.map((menuItem) => (
    <FoodItem key={menuItem.id} item={menuItem}></FoodItem>
  ));

  return (
    <section className={css.meals}>
      <Card>
        <ul>{menuItems}</ul>
      </Card>
    </section>
  );
};

export default FoodMenu;
