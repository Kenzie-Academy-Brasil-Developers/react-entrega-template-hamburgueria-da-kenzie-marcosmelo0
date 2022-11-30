import React from "react";
import logo from "../../Assets/logo.svg";
import { Input } from "../InputSearch";
import { HeaderStyled } from "./style";

export const Header = ({ setSearch }) => {
  return (
    <HeaderStyled>
      <div className="divImg">
        <img src={logo} alt="logotipo Burguer Kenzie" />
      </div>
      <div className="divSearch">
        <Input setSearch={setSearch} />
      </div>
    </HeaderStyled>
  );
};
