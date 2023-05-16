import React, { useContext } from "react";
import { ButtonGray } from "../../Button";
import { ProductContext } from "../../providers/ProductsContext";
import { TotalCart } from "../../TotalCart";
import { CartCard } from "./Card";
import { EmptyCart } from "./EmptyCart";
import { HeaderCart, StyledCartUl } from "./styles";

export const Cart = () => {
  const { currentSale, removeProductCart, setCurrentSale } =
    useContext(ProductContext);
    const { toggleModal } = useContext(ProductContext)
  return (
    <>
      <dialog className="sectionCart">
        <HeaderCart className="titleCart">Carrinho de compras
        <div><span onClick={toggleModal}>X</span></div></HeaderCart>

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
      </dialog>
    </>
  );
};
