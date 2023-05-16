import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/Products";
import { Cart } from "../../components/Products/Cart";
import { ProductContext } from "../../components/providers/ProductsContext";
import { ContainerApp, MainContainer } from "./style";

export const HomePage = () => {
  const {openModal} = useContext(ProductContext)
  return (
    <ContainerApp>
      <Header />
      <MainContainer>
        <ProductList />
        {openModal && <div className="divCart">
          <Cart />
        </div>}
      </MainContainer>
    </ContainerApp>
  );
};

