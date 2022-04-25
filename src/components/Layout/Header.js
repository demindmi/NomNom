import React from "react";
import Greetings from "./Greetings";

import css from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <div className={css.Header}>
        <h1>NomNom</h1>
        <HeaderCartButton onClick={props.onClick} />
      </div>
      <div className={css.image}>
        <img
          src={process.env.PUBLIC_URL + "/background.jpg"}
          alt="BackGround Food"
        />
      </div>
      <Greetings />
    </>
  );
};

export default Header;
