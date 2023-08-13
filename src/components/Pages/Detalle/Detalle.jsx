import { ItemCount } from "../../ItemCount/ItemCount";
import { useEffect, useState, useCallback } from "react";
import { getproducto } from "../../../lib/dat";
import { useNavigate, useParams } from "react-router-dom";
import "./Detalle.scss";
import { useCartContext } from "../../State/Cart.contex";

export const Detalle = () => {
  const { id } = useParams();
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
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={producto?.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{producto?.nombre} </span>

          <p className="detail__info-description">{producto?.description}</p>

          <span className="detail__info-price">
            $
            {(producto?.precio || 0).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">
            ¡Queda solo {producto?.cantidad}!
          </span>

          <ItemCount
            stock={producto.cantidad - (itemInCart?.(id)?.qty || 0)}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};
