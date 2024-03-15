import { useContext } from "react";
import { SubmitHandler,useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { FormStyled, InputStyled } from "../style";
import { loginSchema } from "./loginSchema";
import { ButtonGray, ButtonGreen } from "../../Button";
import { iLoginForm } from "../../../Pages/login/@types";

export const FormLogin = () => {
  const { userLogin, loading, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginForm> = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <FormStyled noValidate onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>

      <label htmlFor="inputEmail">Email</label>
      <InputStyled
        id="inputEmail"
        type="text"
        placeholder="Digite seu e-mail"
        {...register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="inputPassword">Senha</label>
      <InputStyled
        id="inputPassword"
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <ButtonGreen disabled={loading}>
        {loading ? "Entrando" : "Logar"}
      </ButtonGreen>

      <span>
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </span>

      <ButtonGray onClick={() => { window.location.href = '/register'; }}>
        Cadastrar
      </ButtonGray>
    </FormStyled>
  );
};
