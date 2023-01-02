import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ButtonGray } from "../../Button";
import { iRegisterForm } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import { FormStyled, InputStyled } from "../style";
import { registerSchema } from "./registerSchema";

export const FormRegister = () => {
  const { userRegister, setLoading, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterForm> = (data) => {
    userRegister(data, setLoading);
  };

  return (
    <>
      <FormStyled noValidate onSubmit={handleSubmit(submit)}>
        <div className="divRegister">
          <h2>Cadastro</h2>
          <Link to="/">Retornar para o login</Link>
        </div>
        <label htmlFor="inputName">Nome</label>
        <InputStyled
          id="inputName"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}

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
          placeholder="Digite uma senha"
          {...register("password")}
        />
         {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="inputVerifyPass">Confirmar senha</label>
        <InputStyled
          id="inputVerifyPass"
          type="password"
          placeholder="Confirme sua senha"
          {...register('confirmedPassword')}
        />
         {errors.confirmedPassword && <p>{errors.confirmedPassword.message}</p>}


        <ButtonGray disable={loading}>{loading ? "Cadastrando" : "Cadastrar"}</ButtonGray>
      </FormStyled>
    </>
  );
};
