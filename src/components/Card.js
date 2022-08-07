import React, { useContext } from "react";
import { CartContext } from "../App";

function Card({ item }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="Card">
      <div className="Card-Img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="Card-Content">
        <div className="Title">{item.name}</div>
        <a href={item.website} target="_blank">
          {item.country}
        </a>
        <div className="Phone">{Number(item.phone.toString().slice(0, 4))}</div>
        {cart.includes(item) ? (
          <button
            onClick={() => {
              setCart(cart.filter((c) => c.id !== item.id));
            }}
            style={{ backgroundColor: "red" }}
          >
            Remove Cart
          </button>
        ) : (
          <button
            onClick={() => {
              setCart([...cart, item]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
