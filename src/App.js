import "./App.css";
import FoodMenu from "./components/Food/FoodMenu";
import Header from "./components/Layout/Header";
import Modal from "./components/UI/Modal";
import React, { useState } from "react";
import CartProvider from "./global/CartProvider";

import { MEALS } from "./dummyData";
import Footer from "./components/Layout/Footer";

function App() {
  const [showCart, setShowCart] = useState();

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(null);
  };

  return (
    <CartProvider>
      {showCart && <Modal hideModal={hideCartHandler}></Modal>}
      <Header onClick={showCartHandler} />
      <FoodMenu menuItems={MEALS} />
      <Footer footerText={"Dmitry Demin 2022"} />
    </CartProvider>
  );
}
export default App;
