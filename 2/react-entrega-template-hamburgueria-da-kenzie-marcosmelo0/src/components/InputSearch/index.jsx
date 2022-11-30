import React, { useState } from "react";
import { ButtonGreen } from "../Button";
import { InputSearch } from "./style";

export const Input = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  function submit(event) {
    event.preventDefault();
    setSearch(searchInput);
  }

  return (
    <>
      <form onSubmit={submit}>
        <InputSearch
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Digitar Pesquisar"
        ></InputSearch>
        <ButtonGreen height={40}>Pesquisar</ButtonGreen>
      </form>
    </>
  );
};
