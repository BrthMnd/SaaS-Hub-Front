import * as yup from "yup";

export const SchemaLoginValidate = yup.object().shape({
  correo: yup.string().email("El email no es valido"),
  clave: yup
    .string()
    .min(6, "La contraseña debe tener mínimo 6 caracteres")
    .max(15, "La contraseña debe tener máximo 15 caracteres")
    .matches(/[0-9]/, "La contraseña debe contener al menos un número")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra"),
});
