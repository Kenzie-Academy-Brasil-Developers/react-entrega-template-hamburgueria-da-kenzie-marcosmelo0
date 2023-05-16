import React, { useContext, useState } from "react";
import logo from "../../Assets/logo.svg";
import search from "../../Assets/search.svg";
import cart from "../../Assets/cart.svg";
import logout from "../../Assets/logout.svg";
import header2 from "../../Assets/templateRegisterLogin.svg";
import elementHeader from "../../Assets/elementHeader.svg";
import { Input } from "../InputSearch";
import { HeaderStyled, HeaderStyled2 } from "./style";
import { ProductContext } from "../providers/ProductsContext";

export const Header = () => {
  const { setSearch, currentSale } = useContext(ProductContext);
  const [itemsCart, setItemsCart] = useState(0);
  const [searchInput, setSearchInput] = useState(false);
  const { toggleModal } = useContext(ProductContext);

  const toggleSearchInput = () => {
    setSearchInput(!searchInput);
  };

  return (
    <HeaderStyled>
      <div className="divImg">
        <img src={logo} alt="logotipo Burguer Kenzie" />
        <div className="divNavBtns">
          <img
            onClick={() => toggleSearchInput()}
            src={search}
            alt="botão de pesquisar"
          />
          <div className="cart">
            <img onClick={toggleModal} src={cart} alt="botão do carrinho" />
            <span>{currentSale.length}</span>
          </div>
          <img src={logout} alt="botão de sair da conta" />
        </div>
      </div>
      <div className="divSearch">
        {searchInput ? (
          <Input
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearch={setSearch}
          />
        ) : null}
      </div>
    </HeaderStyled>
  );
};

export const HeaderLoginAndRegister = () => {
  return (
    <HeaderStyled2>
      <img className="header" src={header2} alt="cabeçalho" />
      <img
        className="elementHeader"
        src={elementHeader}
        alt="elemento do cabeçalho"
      />
    </HeaderStyled2>
  );
};
