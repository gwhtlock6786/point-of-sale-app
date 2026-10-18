import { useState } from "react";
import { BrowserRouter as Router } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
