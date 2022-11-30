import React from "react";
import { StyledCardCart } from "./style";

export const CartCard = ({ product, removeProductCart }) => {
  return (
    <StyledCardCart>
      <div className="divImgProduct">
        <img src={product.img} alt="" />
      </div>
      <div className="divAlinhamento">
        <div className="divDescriptionProduct">
          <h2>{product.name}</h2>
          <span>{product.category}</span>
        </div>
        <div className="divBtn">
          <button onClick={() => removeProductCart(product.id)}>Remover</button>
        </div>
      </div>
    </StyledCardCart>
  );
};
