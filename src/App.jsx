import { useState } from "react";
import { BrowserRouter as Router } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Item added to cart:", item);
    console.log("Current cart:", [...cart, item]); // Log the updated cart
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
