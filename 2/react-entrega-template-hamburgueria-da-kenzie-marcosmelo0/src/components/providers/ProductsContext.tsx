import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iDefaultProviderProps, iProduct, iProductContext } from "./@types";
import { UserContext } from "./UserContext";

export const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iDefaultProviderProps) => {
  const [products, setProducts] = useState<iProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([]);
  const [currentSale, setCurrentSale] = useState<iProduct[]>([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const { user } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (user || token) {
      (async () => {
        try {
          const response = await api.get<iProduct[]>("products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user]);

  const Search = products.filter((product: iProduct) => {
    if (product.name.toLowerCase().includes(search.toLowerCase()) || !search) {
      return true;
    } else {
    return product.category.toLowerCase().includes(search.toLowerCase());
    }
  });


  const addProductToCart = (product: iProduct) => {
    if (
      !currentSale.find(
        (productSale: iProduct) => productSale.id === product.id
      )
    ) {
      setCurrentSale([...currentSale, product]);
    } else {
      toast.error("Você já adicionou este item no carrinho");
    }
  };

  const removeProductCart = (productSale: iProduct) => {
    const filter = currentSale.filter(
      (product: iProduct) => product.id !== productSale.id
    );
    setCurrentSale(filter);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        search,
        setSearch,
        addProductToCart,
        removeProductCart,
        currentSale,
        setCurrentSale,
        Search,
        toggleModal,
        openModal,

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
