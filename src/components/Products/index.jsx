import React, { useContext } from "react";
import { ProductContext } from "../providers/ProductsContext";
import { Product } from "./ListProducts/Card/card";
import { ContainerProducts, StyledUl } from "./ListProducts/style";

export const ProductList = () => {
  const { search, Search } = useContext(ProductContext);
  return (
    <ContainerProducts>
      {search !== "" && (
        <h2>
          Resultados para: <strong>{search}</strong>
        </h2>
      )}
      <StyledUl>
        {Search.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledUl>
    </ContainerProducts>
  );
};
