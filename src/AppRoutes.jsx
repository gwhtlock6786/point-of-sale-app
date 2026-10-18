import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import { StoreItemsPage } from "./pages/StoreItemsPage";
import CartItemPage from "./pages/CartItemPage";

const AppRoutes = ({ cart, addToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StoreItemsPage addToCart={addToCart} />} />
      <Route path="/cart" element={<CartItemPage cart={cart} />} />
    </Routes>
  );
};

export default AppRoutes;
