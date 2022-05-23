import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import css from "./FoodMenu.module.css";

const FoodMenu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuHandler = async () => {
      const response = await fetch(
        "https://nomnom-dmitrydemin-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error(`Something went wrong, got ${response.status} error code.`);
      }
      const loadedMeals = [];
      const data = await response.json();
      for (const key in data) {
        loadedMeals.push({
          id: key,
          mealDesc: data[key].mealDesc,
          mealName: data[key].mealName,
          mealCost: data[key].mealCost,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMenuHandler().catch((err) => {
      setLoading(false);
      setError(err.message);
    });
  }, []);

  let content = <p className={css.error}>No Meals Found</p>;

  if (loading) {
    content = <p className={css.loading}>...Loading Meals</p>;
  }

  if (meals.length > 0) {
    content = (
      <ul>
        {meals.map((menuItem) => (
          <FoodItem key={menuItem.id} item={menuItem}></FoodItem>
        ))}
      </ul>
    );
  }
  if (error) {
    content = <p className={css.error}>{error}</p>;
  }

  return (
    <section className={css.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default FoodMenu;
