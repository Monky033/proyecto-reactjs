import { useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = ({ img, category, nombre, precio, id }) => {
  const navigate = useNavigate();
  return (
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
  );
};
