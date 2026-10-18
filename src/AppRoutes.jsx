import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import { StoreItemsPage } from "./pages/StoreItemsPage";
import CartItemPage from "./pages/CartItemPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StoreItemsPage />} />
      <Route path="/cart" element={<CartItemPage />} />
    </Routes>
  );
};

export default AppRoutes;
