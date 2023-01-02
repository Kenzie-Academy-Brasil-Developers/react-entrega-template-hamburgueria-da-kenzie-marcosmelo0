import React, { useContext } from "react";
import { ButtonGreen } from "../../../Button";
import { ProductContext } from "../../../providers/ProductsContext";
import { StyledLi } from "../style";

export const Product = ({product}) => {
  const { addProductToCart } = useContext(ProductContext);

  return (
    <StyledLi>
      <div className="DivImgProduct">
        <img src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <span>{product.category}</span>
      <span className="priceProduct">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <ButtonGreen
        onClick={() => addProductToCart(product)}
        width={106}
        height={40}
      >
        Adicionar
      </ButtonGreen>
    </StyledLi>
  );
};
