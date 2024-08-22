import styel from "./login.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FeildSchema } from "./validateSchema";

export const LoginPage = () => {
    const submitButtonRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            passwordRepeat: "",
        },
        resolver: yupResolver(FeildSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    if (submitButtonRef.current) {
        if (
            errors.email === undefined &&
            errors.password === undefined &&
            errors.passwordRepeat === undefined
        ) {
            submitButtonRef.current.focus();
        }
    }

    return (
        <div className={styel["LoginPage"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={styel["title"]}>
                <h1>Форма для регистрации</h1>
            </div>
            <form className={styel["form"]}>
                <div className={styel["email-form"]}>
                    <label htmlFor="Email">Электронная почта</label>
                    <input
                        type="Email"
                        name="Email"
                        placeholder="Почта"
                        {...register("email")}
                    />
                    <p className={styel["error"]}>{errors.email?.message}</p>
                    <button className={styel["cleanButton"]}>Очистить</button>
                </div>
                <div className={styel["password-form"]}>
                    <label htmlFor="Password">Пароль</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Пароль"
                        {...register("password")}
                    />
                    <p className={styel["error"]}>{errors.password?.message}</p>
                    <button className={styel["cleanButton"]}>Очистить</button>
                </div>
                <div className={styel["passwordRepeat-form"]}>
                    <label htmlFor="Password">Повторите пароль</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Повторите пароль"
                        {...register("passwordRepeat")}
                    />
                    <p className={styel["error"]}>
                        {errors.passwordRepeat?.message}
                    </p>
                    <button className={styel["cleanButton"]}>Очистить</button>
                </div>
            </form>
            <button
                ref={submitButtonRef}
                className={styel["submitButton"]}
                onClick={handleSubmit(onSubmit)}
            >
                Зарегистрироваться
            </button>
        </div>
    );
};
