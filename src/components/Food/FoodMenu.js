import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";

import css from "./FoodMenu.module.css";
const FoodMenu = (props) => {
  const menuItems = props.menuItems.map((menuItem) => (
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
