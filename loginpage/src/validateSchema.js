import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const FeildSchema = yup.object().shape({
    email: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .max(20, "*Максимальная длина 20 символов")
        .min(3, "*Минимальная длина 3 символа")
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "*Только латинские буквы и цифры"
        ),
    password: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .min(5, "*Минимальная длина 5 символов"),
    passwordRepeat: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .test("*password-match", "Пароли не совпадают", function (value) {
            return this.parent.password === value;
        }),
});
