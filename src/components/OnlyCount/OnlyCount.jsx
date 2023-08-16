import { useState } from "react";

export const OnlyCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);
  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };
  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };
  return (
    <>
      {stock ? (
        <>
          <div className="contadores">
            <button onClick={() => handleSub()}>-</button>
            <button
              disabled={!stock}
              onClick={() => {
                setCount(Math.min(stock, count + 1));
                onAdd(count);
                setCount(1);
              }}
            >
              +
            </button>
          </div>
        </>
      ) : (
        <h5>Tienes todo en el carrito</h5>
      )}
    </>
  );
};
