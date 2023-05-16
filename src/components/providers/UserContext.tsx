import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginForm } from "../../Pages/login/@types";
import { api } from "../../services/api";
import {
  iDefaultProviderProps,
  iProduct,
  iRegisterForm,
  iUser,
  iUserContext,
  iUserLoginResponse,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (
    formData: iLoginForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iUserLoginResponse>("login", formData);
      setUser(response.data.user);
      toast.success("Logado com Sucesso!");
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/dash");
    } catch (error) {
      toast.error("Ops! E-mail ou senha incorretos!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    FormData: iRegisterForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("users", FormData);
      response.status === 201 && toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        setLoading,
        loading,
        userRegister,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
