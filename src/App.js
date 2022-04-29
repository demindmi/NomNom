import "./App.css";
import FoodMenu from "./components/Food/FoodMenu";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./global/CartProvider";
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
      {showCart && <Cart hideModal={hideCartHandler}></Cart>}
      <Header onClick={showCartHandler} />
      <FoodMenu />
      <Footer footerText={"Dmitry Demin 2022"} />
    </CartProvider>
  );
}
export default App;
