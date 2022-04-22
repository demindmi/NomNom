import React from "react";

import "./Greetings.module.css";

const Greetings = (props) => {
  return <div>{props.children}</div>;
};

export default Greetings;
