import styled from "styled-components";
import { useState, useEffect } from "react";
import { getProductos } from "../../../lib/dat";
import { ItemLisContainer } from "../../ItemLisContainer/ItemLisContainer";
import { Spiner } from "../../Loader/Cargadores";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProductos().then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, []);

  return (
    <Stiloo>
      <div>
        {isLoading ? (
          <Spiner />
        ) : (
          <div className="container">
            <ItemLisContainer products={products} />
          </div>
        )}
      </div>
    </Stiloo>
  );
};
export default Home;

const Stiloo = styled.div`
  background-color: rgb(75, 75, 75);
`;
