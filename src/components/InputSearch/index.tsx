import { InputSearch } from "./style";
import search from "../../Assets/search-2.svg";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductsContext";

export const Input = ({ setSearchInput, searchInput }: any) => {
  const { setSearch } = useContext(ProductContext);

  function submit(event: any) {
    event.preventDefault();
    setSearchInput(!searchInput);
    setSearch(searchInput);
  }

  return (
    <>
      <form onSubmit={submit}>
        <InputSearch
          onChange={(e: any) => setSearchInput(e.target.value)}
          placeholder="Digitar Pesquisa"
        ></InputSearch>
        <button>
          <img src={search} alt="" />
        </button>
      </form>
    </>
  );
};
