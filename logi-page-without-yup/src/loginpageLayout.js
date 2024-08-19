import styel from "./login.module.css";

export const LoginpageLayout = ({
    email,
    password,
    passwordRepeat,
    setEmail,
    setPassword,
    setPasswordRepeat,
    emailErrorMassage,
    emailOnBlur,
    passwordErrorMassage,
    passwordOnBlur,
    passwordRepeatErrorMassage,
    sendData,
    submitButtonRef,
    paswordRepeatRef,
    deletEmail,
    deletPassword,
    deletPasswordRepeat,
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
                        onBlur={emailOnBlur}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <p className={styel[`error`]}>{emailErrorMassage}</p>
                    <button
                        className={styel["cleanButton"]}
                        onClick={deletEmail}
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
                        onBlur={passwordOnBlur}
                    />
                    <p className={styel[`error`]}>{passwordErrorMassage}</p>
                    <button
                        className={styel["cleanButton"]}
                        onClick={deletPassword}
                    >
                        Очистить
                    </button>
                </div>
                <div className={styel["passwordRepeat-form"]}>
                    <label htmlFor="Password">Повторите пароль</label>
                    <input
                        ref={paswordRepeatRef}
                        type="password"
                        name="Password"
                        placeholder="Повторите пароль"
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                    <p className={styel[`error`]}>
                        {passwordRepeatErrorMassage}
                    </p>
                    <button
                        className={styel["cleanButton"]}
                        onClick={deletPasswordRepeat}
                    >
                        Очистить
                    </button>
                </div>
            </form>
            {email.length !== 0 &&
                password.length !== 0 &&
                passwordRepeat.length !== 0 && (
                    <button
                        ref={submitButtonRef}
                        className={styel["submitButton"]}
                        onClick={sendData}
                    >
                        Зарегистрироваться
                    </button>
                )}
        </div>
    );
};
