import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import Card from "../components/Card";

function CartPage() {
  const { cart } = useContext(CartContext);
  // const [total, setTotal] = useState;

  // useEffect(() => {
  //   setTotal(cart.reduce((acc, curr) => acc + Number(curr.phone), 0));
  // }, [cart]);

  return (
    <div style={{ paddingTop: "5rem" }}>
      Total Items: {cart.length}
      <div className="HomeContainer">
        {cart.length
          ? cart.map((item) => <Card key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
}

export default CartPage;
