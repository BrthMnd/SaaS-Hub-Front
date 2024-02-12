import * as yup from "yup";

export const SchemaLoginValidate = yup.object().shape({
  correo: yup.string().email("El email no es valido"),
  clave: yup
    .string()
    .min(6, "la contraseña tiene que ser mas de 6 caracteres")
    .max(15, "la contraseña tiene que ser menos de 15 caracteres")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[a-zA-Z]/, "Debe contener al menos un carácter de tipo letra"),
});
