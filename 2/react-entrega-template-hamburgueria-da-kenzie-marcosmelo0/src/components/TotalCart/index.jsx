import React from "react";
import { StyledTotalCart } from "./style";

export const TotalCart = ({ currentSale }) => {
  const total = currentSale.reduce((acc, act) => acc + act.price, 0);

  return (
    <StyledTotalCart>
      <div>
        <h2>Total</h2>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </StyledTotalCart>
  );
};
