import { useState } from "react";
import { BrowserRouter as Router } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(newCartItem) {
    //TODO: Check if the item is already in the cart and update quantity if it is
    const existingItem = cart.find(
      (cartItem) => cartItem.id === newCartItem.id,
    );

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === newCartItem.id
            ? {
                ...cartItem,
                quantityAvailable: cartItem.quantityAvailable - 1,
                quantity: cartItem.quantity + 1,
              }
            : { ...cartItem },
        ),
      );
      return;
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...newCartItem,
          quantityAvailable: newCartItem.quantityAvailable - 1,
          quantity: 1,
        },
      ]);
    }

    // setCart((prevCart) => [...prevCart, newCartItem]);
    console.log("App.js-addToCart-function: Item added to cart:", newCartItem);
    console.log("App.js-addToCart-function: Current cart:", [
      ...cart,
      newCartItem,
    ]); // Log the updated cart
  }

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
