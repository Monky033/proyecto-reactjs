import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../../lib/dat";
import { ItemLisContainer } from "../../ItemLisContainer/ItemLisContainer";

export const Categoria = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);
    getProductos(id).then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <ItemLisContainer products={products} loading={isLoading} />
      </div>
    </div>
  );
};
