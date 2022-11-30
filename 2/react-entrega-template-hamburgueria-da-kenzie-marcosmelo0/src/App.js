import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { HomePage } from "./Pages/Home";
import { api } from "./services/api";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const Search = products.filter((product) => {
    if (product.name.toLowerCase() === search || !search) {
      return true;
    } else {
      return product.category.toLowerCase().includes(search.toLocaleLowerCase());
    }
  });

  const addProductToCart = (product) => {
    if (!currentSale.find((productSale) => productSale.id === product.id)) {
      setCurrentSale([...currentSale, product]);
    } else {
      toast.error("Você já adicionou este item no carrinho");
    }
  };

  const removeProductCart = (productSale) => {
    const filter = currentSale.filter((product) => product.id !== productSale);
    setCurrentSale(filter);
  };

  return (
    <>
      <HomePage
        search={search}
        setSearch={setSearch}
        products={Search}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        addProductToCart={addProductToCart}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        removeProductCart={removeProductCart}
      />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
