import styel from "./login.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FeildSchema } from "./validateSchema";

export const LoginPage = () => {
    const submitButtonRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            passwordRepeat: "",
        },
        resolver: yupResolver(FeildSchema),
    });

    useEffect(() => {
        if (isValid) {
            submitButtonRef.current.focus();
        }
    }, [isValid]);

    const onSubmit = (DATA) => {
        console.log(DATA);
    };

    return (
        <div className={styel["LoginPage"]}>
            <div className={styel["title"]}>
                <h1>Форма для регистрации</h1>
            </div>
            <form className={styel["form"]} onSubmit={handleSubmit(onSubmit)}>
                <div className={styel["email-form"]}>
                    <label htmlFor="Email">Электронная почта</label>
                    <input
                        type="Email"
                        name="Email"
                        placeholder="Почта"
                        {...register("email")}
                    />
                    <p className={styel["error"]}>{errors.email?.message}</p>
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
                </div>
                <button
                    type="submit"
                    ref={submitButtonRef}
                    className={styel["submitButton"]}
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};
