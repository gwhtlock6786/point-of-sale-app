import { useState } from "react";
import { BrowserRouter as Router } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(newCartItem) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === newCartItem.id,
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === newCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...prevCart, { ...newCartItem, quantity: 1 }];
    });
  }

  // setCart((prevCart) => [...prevCart, newCartItem]);
  // console.log("App.js-addToCart-function: Item added to cart:", newCartItem);
  // console.log("App.js-addToCart-function: Current cart:", [
  //   ...cart,
  //   newCartItem,
  // ]); // Log the updated cart

  return (
    <>
      <Router>
        <Header />
        <AppRoutes cart={cart} addToCart={addToCart} />
      </Router>
    </>
  );
}

export default App;
