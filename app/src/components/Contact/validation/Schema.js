import * as Yup from "yup";

const Schema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido!"),
    email: Yup.string().required("El email es requerido!"),
    phone: Yup.number().required("El numero es requerido!"),
    message: Yup.string().required("El mensaje es requerido!")
  });
  
export default Schema;