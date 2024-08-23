import * as yup from "yup";

export const FeildSchema = yup.object().shape({
    email: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .max(25, "*Максимальная длина 30 символов")
        .email("Это поле должно содержать почту в формате: 2LW9w@example.com"),
    password: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .min(5, "*Минимальная длина 5 символов"),
    passwordRepeat: yup
        .string()
        .required("*Это поле обязательно для заполнения")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});
