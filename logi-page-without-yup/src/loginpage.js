import { LoginpageLayout } from "./loginpageLayout";
import { useState, useRef } from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [emailErrorMassage, setEmailErrorMassage] = useState("");
    const [passwordErrorMassage, setPasswordErrorMassage] = useState("");
    const submitButtonRef = useRef(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRepeatErrorMassage = "";
    const sendData = () => {
        setEmail("");
        setPassword("");
        setPasswordRepeat("");
        console.log(
            `Данные отправлены: ${email}, ${password}, ${passwordRepeat}`
        );
    };

    const onBlurEmail = () => {
        if (email.length === 0) {
            setEmailErrorMassage("*Данное поле не может быть пустым");
        } else if (!emailRegex.test(email)) {
            setEmailErrorMassage("*Некорректный адрес электронной почты");
        } else {
            setEmailErrorMassage("");
        }
    };

    const onBlurPassword = () => {
        if (password.length === 0) {
            setPasswordErrorMassage("*Данное поле не может быть пустым");
        } else if (password.length <= 5) {
            setPasswordErrorMassage(
                "*Длина пароля должна быть больше или равна 5"
            );
        } else {
            setPasswordErrorMassage("");
        }
    };
    if (password !== passwordRepeat) {
        passwordRepeatErrorMassage = "*Пароли не совпадают";
    }
    if (
        emailErrorMassage === "" &&
        passwordErrorMassage === "" &&
        passwordRepeatErrorMassage === "" &&
        email !== "" &&
        password !== "" &&
        passwordRepeat !== "" &&
        submitButtonRef.current
    ) {
        submitButtonRef.current.focus();
        submitButtonRef.current.disabled = false;
    } else if (submitButtonRef.current) {
        submitButtonRef.current.disabled = true;
    }

    const deletEmail = (event) => {
        event.preventDefault();
        setEmail("");
    };
    const deletPassword = (event) => {
        event.preventDefault();
        setPassword("");
    };
    const deletPasswordRepeat = (event) => {
        event.preventDefault();
        setPasswordRepeat("");
    };

    return (
        <LoginpageLayout
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            emailErrorMassage={emailErrorMassage}
            emailOnBlur={onBlurEmail}
            emailRegex={emailRegex}
            passwordErrorMassage={passwordErrorMassage}
            setPasswordRepeat={setPasswordRepeat}
            passwordOnBlur={onBlurPassword}
            passwordRepeat={passwordRepeat}
            passwordRepeatErrorMassage={passwordRepeatErrorMassage}
            sendData={sendData}
            submitButtonRef={submitButtonRef}
            deletEmail={deletEmail}
            deletPassword={deletPassword}
            deletPasswordRepeat={deletPasswordRepeat}
        />
    );
};
