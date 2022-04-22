import React, { useEffect, useState } from "react";
import Greetings from "./Greetings";

import css from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={css.Header}>
        <h1>{props.header}</h1>
      </div>
      <div className={css.image}>
        <img src={props.src} alt={props.altImage} />
      </div>
      <Greetings />
    </>
  );
};

export default Header;
