import React from "react";
import { FormLogin } from "../../components/forms/formLogin";
import { HeaderLoginAndRegister } from "../../components/Header";

export const PageLogin = () => {
  return (
    <>
      <div className="divLogin">
        <HeaderLoginAndRegister />
        <FormLogin />
      </div>
    </>
  );
};
