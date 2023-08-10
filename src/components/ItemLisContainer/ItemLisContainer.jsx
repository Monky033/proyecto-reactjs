import "./ItemLisContainer.css";
import { Item } from "../Item/Item";
import { Loader } from "../Loader/Cargadores";

export const ItemLisContainer = ({ products, loading = false }) => (
  <div className="item-list">
    {loading ? (
      <Loader />
    ) : (
      products.map((product) => <Item key={product.id} {...product} />)
    )}
  </div>
);
