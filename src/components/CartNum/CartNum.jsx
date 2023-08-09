import "./CartNum.css";
import { useCartContext } from "../State/Cart.contex";
import { useNavigate } from "react-router-dom";

export const CartNum = () => {
  const { getCartQty } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      <p>🛒</p>
      {getCartQty ? (
        <span className="cart-widget__qty">({getCartQty})</span>
      ) : null}
    </div>
  );
};
