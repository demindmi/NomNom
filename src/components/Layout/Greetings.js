import React from "react";

import css from "./Greetings.module.css";

const Greetings = () => {
  return (
    <section className={css.Greetings}>
      <h2>Delicious Food, Friendly Stuff</h2>
      <p>
        Do you feel a wave of nomnoms hitting your stomach? Are you ready too
        clench your hunger? ARE YOU READY?
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        only with love!
      </p>
    </section>
  );
};

export default Greetings;
