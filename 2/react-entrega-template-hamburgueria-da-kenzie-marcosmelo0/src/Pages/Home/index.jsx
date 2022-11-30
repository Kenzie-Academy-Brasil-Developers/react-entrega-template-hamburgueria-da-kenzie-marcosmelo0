import React from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/Products";
import { Cart } from "../../components/Products/Cart";
import { ContainerApp, MainContainer } from "./style";

export const HomePage = ({
  products,
  currentSale,
  setCurrentSale,
  addProductToCart,
  removeProductCart,
  filteredProducts,
  search,
  setSearch,
}) => {
  return (
    <ContainerApp>
      <Header setSearch={setSearch} />
      <MainContainer>
        <ProductList
          search={search}
          filteredProducts={filteredProducts}
          addProductToCart={addProductToCart}
          products={products}
          setCurrentSale={setCurrentSale}
        />
        <div className="divCart">
          <Cart
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            removeProductCart={removeProductCart}
          />
        </div>
      </MainContainer>
    </ContainerApp>
  );
};
