import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { PageLogin } from "../Pages/login";
import { PageRegister } from "../Pages/Register";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />}></Route>
      <Route path="/register" element={<PageRegister />}></Route>
      <Route path="/dash" element={<HomePage />}></Route>
    </Routes>
  );
};
