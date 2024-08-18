import { LoginpageLayout } from "./loginpageLayout";
import { useState, useRef } from "react";

export const LoginPage = () => {
    let allIsVaild = false;
    let allFieldsAreFilledIn = false;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isVaildEmail, setIsVaildEmail] = useState(true);
    const [isVaildPassword, setIsVaildPassword] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const submitButtonRef = useRef(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const sendData = () => {
        setEmail("");
        setPassword("");
        setPasswordRepeat("");
        console.log(
            `Данные отправлены: Почта: ${email}, Пароль: ${password}, Повтор пароля: ${passwordRepeat}`
        );
    };
    if (email && password && passwordRepeat) {
        allFieldsAreFilledIn = true;
    }
    if (isVaildEmail && isVaildPassword && passwordsMatch) {
        allIsVaild = true;
    }
    if (allIsVaild && allFieldsAreFilledIn) {
        submitButtonRef.current.focus();
        submitButtonRef.current.disabled = false;
    } else {
        submitButtonRef.current.disabled = true;
    }

    const handleEmailBlur = () => {
        if (email.length > 20) {
            setIsVaildEmail(false);
            setErrorEmailMessage("Превышена максимальная длина почты");
        } else if (!emailRegex.test(email)) {
            setIsVaildEmail(false);
            setErrorEmailMessage("Некорректная почта");
        } else {
            setIsVaildEmail(true);
            setErrorEmailMessage("");
        }
    };

    const handlePasswordBlur = () => {
        if (password.length < 5) {
            setIsVaildPassword(false);
            setErrorPasswordMessage("Слишком короткий пароль");
        } else {
            setIsVaildPassword(true);
            setErrorPasswordMessage("");
        }
    };

    const handlePasswordRepeatBlur = () => {
        if (password !== passwordRepeat) {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(true);
        }
    };

    return (
        <LoginpageLayout
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            sendData={sendData}
            isVaildEmail={isVaildEmail}
            setPasswordRepeat={setPasswordRepeat}
            passwordRepeat={passwordRepeat}
            isVaildPassword={isVaildPassword}
            passwordsMatch={passwordsMatch}
            handleEmailBlur={handleEmailBlur}
            handlePasswordBlur={handlePasswordBlur}
            handlePasswordRepeatBlur={handlePasswordRepeatBlur}
            errorEmailMessage={errorEmailMessage}
            errorPasswordMessage={errorPasswordMessage}
            submitButtonRef={submitButtonRef}
        />
    );
};
