import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./Item.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { getproducto } from "../../lib/dat";
import { useCartContext } from "../State/Cart.contex";
import OnlyButton from "../OnlyButton/OnlyButton";

export const Item = ({ img, category, nombre, precio, id }) => {
  const navigate = useNavigate();

  const [producto, setproducto] = useState({});

  const { addProduct, itemInCart } = useCartContext();

  useEffect(() => {
    getproducto(id).then((res) => {
      if (!res) return navigate("/");
      setproducto(res);
    });
  }, []);

  const handleAdd = useCallback(
    (qty) => {
      addProduct(producto, qty);
    },
    [addProduct, producto]
  );

  return (
    <div className=" centrado">
      <div className="item" onClick={() => navigate(`/item/${id}`)}>
        <div className="item_img">
          <img src={img} />
        </div>
        <div className="item_content">
          <div className="item_content-info">
            <span className="item_content-title">{nombre}</span>
            <br />
            <span className="item_content-category">{category}</span>
          </div>
        </div>
        <span className="item_content-price">
          $
          {precio.toLocaleString("es-AR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <OnlyButton
        stock={producto.cantidad - (itemInCart?.(id)?.qty || 0)}
        onAdd={handleAdd}
      />
    </div>
  );
};
