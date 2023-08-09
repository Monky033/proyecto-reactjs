import styled from "styled-components";
import { useState, useEffect } from "react";
import { getProductos } from "../../../lib/dat";
import { ItemLisContainer } from "../../ItemLisContainer/ItemLisContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductos().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <Stiloo>
      <div>
        <div className="container">
          <ItemLisContainer products={products} />
        </div>
      </div>
    </Stiloo>
  );
};
export default Home;

const Stiloo = styled.div``;
