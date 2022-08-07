import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
import Home from "./routes/Home";
import CartPage from "./routes/CartPage";
import axios from "axios";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakerapi.it/api/v1/companies?_seed=12456`)
      .then((res) => setCompany(res.data.data))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <div>
            <Header />
            <div className="App">
              <Routes>
                <Route path="/" exact element={<Home company={company} />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </div>
          </div>
        </CartContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
