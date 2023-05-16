import React from "react";
import { StyledEmptyCart } from "../styles";

export const EmptyCart = () => {
  return (
    <>
      <StyledEmptyCart>
        {
          <div className="cardProduct">
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </div>
        }
      </StyledEmptyCart>
    </>
  );
};
