import React from "react";
import { useState } from "react";

const OnlyButton = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);
  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };
  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };
  return (
    <button
      className="item-count__add"
      disabled={!stock}
      onClick={() => {
        onAdd(count);
        setCount(1);
      }}
    >
      Agregar a carrito
    </button>
  );
};

export default OnlyButton;
