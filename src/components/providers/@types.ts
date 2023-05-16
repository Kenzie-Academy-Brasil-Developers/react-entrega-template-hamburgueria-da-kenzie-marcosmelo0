import React from "react";
import { iLoginForm } from "../../Pages/login/@types";

export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iUserLoginResponse {
  accessToken: string;
  user: iUser;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iRegisterForm {
  email: string;
  password: string;
  name: string;
  confirmedPassword: string;
}

export interface iUserContext {
  user: iUser | null;
  userRegister: (
    formData: iRegisterForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogin: (
    formData: iLoginForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  /* userLogout: () => void; */
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

export interface iProductContext {
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  filteredProducts: iProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  addProductToCart: (product: iProduct) => void;
  removeProductCart: (productSale: iProduct) => void;
  currentSale:  iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  Search: iProduct[];
  toggleModal: () => void;
  openModal: boolean;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iSearch {

}