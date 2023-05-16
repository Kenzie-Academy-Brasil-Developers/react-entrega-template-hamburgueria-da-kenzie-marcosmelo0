import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve conter pelo menos 6 caracteres."),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  name: yup.string().required("O nome é obrigatório."),
});
