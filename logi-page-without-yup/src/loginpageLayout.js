import styel from "./login.module.css";

export const LoginpageLayout = ({
    email,
    password,
    passwordRepeat,
    setEmail,
    setPassword,
    setPasswordRepeat,
    sendData,
    isVaildEmail,
    isVaildPassword,
    passwordsMatch,
    errorEmailMessage,
    errorPasswordMessage,
    handleEmailBlur,
    submitButtonRef,
    handlePasswordBlur,
    handlePasswordsMatch,
    allFieldsAreFilledIn,
    allIsVaild,
}) => {
    return (
        <div className={styel["LoginPage"]}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                    />
                    {!isVaildEmail && (
                        <p className={styel["error"]}>{errorEmailMessage}</p>
                    )}
                    <button
                        className={styel["cleanButton"]}
                        onClick={(e) => {
                            e.preventDefault();
                            setEmail("");
                        }}
                    >
                        Очистить
                    </button>
                </div>
                <div className={styel["password-form"]}>
                    <label htmlFor="Password">Пароль</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                    />
                    {!isVaildPassword && (
                        <p className={styel["error"]}>{errorPasswordMessage}</p>
                    )}
                    <button
                        className={styel["cleanButton"]}
                        onClick={(e) => {
                            e.preventDefault();
                            setPassword("");
                        }}
                    >
                        Очистить
                    </button>
                </div>
                <div className={styel["passwordRepeat-form"]}>
                    <label htmlFor="Password">Повторите пароль</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Повторите пароль"
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                        onBlur={handlePasswordsMatch}
                    />
                    {!passwordsMatch && (
                        <p className={styel["error"]}>Пароли не совпадают</p>
                    )}
                    <button
                        className={styel["cleanButton"]}
                        onClick={(e) => {
                            e.preventDefault();
                            setPasswordRepeat("");
                        }}
                    >
                        Очистить
                    </button>
                </div>
            </form>
            <button
                className={styel["submitButton"]}
                onClick={sendData}
                ref={submitButtonRef}
            >
                Зарегистрироваться
            </button>
        </div>
    );
};
