import * as yup from "yup";
import { ObjectSchema } from "yup";

const LoginFormValidation: ObjectSchema<{
  email: string;
  password: string;
}> = yup.object().shape({
  email: yup.string().required("Email is required.").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password too short"),
});

export default LoginFormValidation;
