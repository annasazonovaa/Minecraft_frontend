// components/Auth/AuthForm.jsx
import { useEffect, useState } from "react";
import InputField from "./inputField";

const AuthForm = ({ type }) => {
  const isLogin = type === "login";

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors({});
  }, [type]);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.username) newErrors.username = "Обязательное поле";

    if (!isLogin && !form.email) {
      newErrors.email = "Обязательное поле";
    }

    if (!form.password) newErrors.password = "Обязательное поле";

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Данные формы:", form);
    }
  };

  return (
    <div className="form">
      <h2 className="auth-title">
        {isLogin ? "Вход" : "Регистрация"}
      </h2>

      <InputField
        placeholder={isLogin ? "Игровой ник или почта" : "Игровой ник"}
        value={form.username}
        onChange={handleChange("username")}
        error={errors.username}
      />

      {!isLogin && (
        <InputField
          type="email"
          placeholder="Почта"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
      )}

      <InputField
        type="password"
        placeholder="Пароль"
        value={form.password}
        onChange={handleChange("password")}
        error={errors.password}
      />

      {isLogin && <span className="forgot">Забыли пароль?</span>}

      <button className="submit-btn" onClick={handleSubmit}>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
    </div>
  );
};

export default AuthForm;