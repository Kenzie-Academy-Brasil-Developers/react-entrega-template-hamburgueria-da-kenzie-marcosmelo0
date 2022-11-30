import React from "react";
import { Product } from "./ListProducts/Card/card";
import { ContainerProducts, StyledUl } from "./ListProducts/style";

export const ProductList = ({
  products,
  setCurrentSale,
  addProductToCart,
  filteredProducts,
  search,
}) => {
  return (
    <ContainerProducts>
      {search !== "" && (
        <h2>
          Resultados para: <strong>{search}</strong>
        </h2>
      )}
      <StyledUl>
        {filteredProducts.length !== 0
          ? filteredProducts.map((product) => (
              <Product
                key={product.id}
                addProductToCart={addProductToCart}
                product={product}
                setCurrentSale={setCurrentSale}
              />
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                addProductToCart={addProductToCart}
                product={product}
                setCurrentSale={setCurrentSale}
              />
            ))}
      </StyledUl>
    </ContainerProducts>
  );
};
