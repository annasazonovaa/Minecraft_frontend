// components/Auth/AuthModal.jsx
import { useState } from "react";
import closeIcon from '../Assets/closeIcon.svg';
import "./auth.css";
import AuthForm from "./authForm";

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="close-button" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>

        <AuthForm type={mode} />

        <div className="switch">
          {mode === "login" ? (
            <span>
              Нет аккаунта?{" "}
              <span className="switch-link" onClick={() => setMode("register")}>
                Регистрация
              </span>
            </span>
          ) : (
            <span>
              Уже есть аккаунт?{" "}
              <span className="switch-link" onClick={() => setMode("login")}>
                Войти
              </span>
              </span>
            )}
          </div>
      </div>
    </div>
  );
};

export default AuthModal;