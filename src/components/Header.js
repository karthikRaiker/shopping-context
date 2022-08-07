import React, { useContext } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

function Header() {
  const cartContext = useContext(CartContext);
  return (
    <div className="Nav">
      <Link to="/" className="Item">
        Home
      </Link>
      <Link to="/cart" className="Item">
        Cart ({cartContext.cart.length})
      </Link>
    </div>
  );
}

export default Header;
