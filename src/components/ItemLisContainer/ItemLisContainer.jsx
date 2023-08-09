import "./ItemLisContainer.css";
import { Item } from "../Item/Item";

export const ItemLisContainer = ({ products }) => (
  <div className="item-list">
    {products.map((product) => (
      <Item key={product.id} {...product} />
    ))}
  </div>
);
