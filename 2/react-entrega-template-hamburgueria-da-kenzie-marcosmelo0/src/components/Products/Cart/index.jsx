import React from "react";
import { ButtonGray } from "../../Button";
import { TotalCart } from "../../TotalCart";
import { CartCard } from "./Card";
import { EmptyCart } from "./EmptyCart";
import { HeaderCart, StyledCartUl } from "./styles";

export const Cart = ({ currentSale, removeProductCart, setCurrentSale }) => {
  return (
    <>
      <section className="sectionCart">
        <HeaderCart className="titleCart">Carrinho de compras</HeaderCart>

        {currentSale.length !== 0 ? (
          <StyledCartUl>
            {currentSale.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                removeProductCart={removeProductCart}
              />
            ))}
            <hr></hr>
            <TotalCart currentSale={currentSale} />
            <ButtonGray onClick={() => setCurrentSale([])} width={100}>
              Remover Todos
            </ButtonGray>
          </StyledCartUl>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
};
