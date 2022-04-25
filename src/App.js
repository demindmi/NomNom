import "./App.css";
import FoodMenu from "./components/Food/FoodMenu";
import Header from "./components/Layout/Header";
import Modal from "./components/UI/Modal";
import React, { useState } from "react";
// import CartProvider from "./global/CartContext";

import { MEALS } from "./dummyData";
import Footer from "./components/Layout/Footer";

function App() {
  const [showCart, setShowCart] = useState();
  const cartHandler = () => {
    console.log("click");
    setShowCart(null);
  };
  const show = () => {
    setShowCart(true);
  };

  return (
    // <CartProvider.Provider>
    <>
      {showCart && <Modal hideModal={cartHandler}></Modal>}
      <Header
        src={process.env.PUBLIC_URL + "/background.jpg"}
        altImage="BackGround Food Image"
        header="NomNom"
      />
      <FoodMenu menuItems={MEALS} />
      <button onClick={show}>Click</button>
      <Footer footerText={"Dmitry Demin 2022"} />
    </>
    // </CartProvider.Provider>
  );
}
export default App;
