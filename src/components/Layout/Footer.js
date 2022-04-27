import React from "react";
import css from "./Footer.module.css";

const Footer = (props) => {
  // const [paneOpen, setPaneOpen] = useState();
  // const footerHandler = () => {
  //   setPaneOpen(true);
  // };

  return (
    <>
      <footer className={css.Footer}>
        <div className={css.text}>{props.footerText}</div>
      </footer>
    </>
  );
};

export default Footer;
