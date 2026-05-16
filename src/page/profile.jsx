import { useEffect, useRef, useState } from "react";
import avatarImg from "../Components/Assets/profileAvatar.png";
import PrivilegeIcon from "../Components/Assets/profilePrivilegeIcon.svg";
import ProfileIcon from "../Components/Assets/profileProfileIcon.svg";
import QuickAccessIcon from "../Components/Assets/profileQuickAccessIcon.svg";
import SettingsIcon from "../Components/Assets/profileSettingsIcon.svg";
import ShopIcon from "../Components/Assets/profileShopIcon.svg";
import { getProfile, updateProfile } from "../api/profileApi";
import "./profile.css";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: ""
  });

  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState(avatarImg);

  const settingsRef = useRef(null);
  const purchasesRef = useRef(null);
  const perksRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    const loadProfile = async () => {
      const data = await getProfile();

      if (!data) return;

      setForm({
        nickname: data.nickname,
        email: data.email,
        password: data.password
      });

      setRole(data.role);
      setAvatar(data.avatar || avatarImg);
    };

    loadProfile();
  }, []);

  const toggleEdit = async () => {
    if (editing) {
      const updated = await updateProfile({
        nickname: form.nickname,
        email: form.email,
        password: form.password
      });

      if (updated) {
        setForm({
          nickname: updated.nickname,
          email: updated.email,
          password: updated.password
        });
      }
    }

    setEditing((prev) => !prev);
  };

  return (
    <div className="profile-page">

      {/* SIDEBAR */}
      <div className="profile-sidebar">

        <button className="sidebar-btn">
          <img className="sidebar-icon" src={QuickAccessIcon} alt="" />
          Быстрый доступ
        </button>

        <button className="sidebar-btn">
          <img className="sidebar-icon" src={ProfileIcon} alt="" />
          Профиль
        </button>

        <button className="sidebar-btn" onClick={() => scrollTo(perksRef)}>
          <img className="sidebar-icon" src={PrivilegeIcon} alt="" />
          Привилегии
        </button>

        <button className="sidebar-btn" onClick={() => scrollTo(purchasesRef)}>
          <img className="sidebar-icon" src={ShopIcon} alt="" />
          Мои покупки
        </button>

        <button className="sidebar-btn" onClick={() => scrollTo(settingsRef)}>
          <img className="sidebar-icon" src={SettingsIcon} alt="" />
          Настройки
        </button>

      </div>

      {/* CONTENT */}
      <div className="profile-content">

        {/* PROFILE HEADER */}
        <div className="profile-card">

          <img className="avatar" src={avatar} alt="avatar" />

          <div className="profile-info">

            <h1 className="profile-name">
              {form.nickname}
            </h1>

            <p
              className="profile-role"
              style={{ color: "#FFFF55" }}
            >
              {role}
            </p>

            <p
              className="profile-quote"
            >
              «Свет не исцеляет — он требует быть достойным»
            </p>

          </div>

        </div>

        {/* PERKS */}
        <div ref={perksRef} className="section">

          <h2 className="section-title">
            Привилегии и бустеры
          </h2>

          <div className="section-content">

            <p><b>Привелегии:</b></p>


            <p>
              Косметический префикс{" "}
              <span style={{ color: "#FFFF55" }}>
                Избранник Света
              </span>{" "}
              в табе, чате и возле ника
            </p>

            <p>
              <span style={{ color: "#55FF55" }}>
                3 дома
              </span>{" "}
               в /sethome
            </p>

            <p>
              Приваты до{" "}
              <span style={{ color: "#AA00AA" }}>
                65000
              </span>
            </p>

            <p>
              Максимум{" "}
              <span style={{ color: "#0000AA" }}>
                4 привата
              </span>{" "}
              
            </p>



            {/*<p className="show-more">
              Показать все
            </p>*/}

            <br />

            <p><b>Бустеры:</b></p>

            <p>Отсутствуют</p>


          </div>

          {/*<p className="show-more">
            Показать все
          </p>*/}

        </div>

        {/* PURCHASES */}
        <div ref={purchasesRef} className="section">

          <h2 className="section-title">
            Мои покупки
          </h2>

          <div className="purchase-item">

            <div className="purchase-date">
              11.05.2026
            </div>

            <div className="purchase-row">
              <div className="purchase-title">
                Избранник Света
              </div>

              <div className="purchase-price">
                150.00 руб
              </div>
            </div>

          </div>

          <div className="purchase-item">

            <div className="purchase-date">
              17.04.2026
            </div>

            <div className="purchase-row">
              <div className="purchase-title">
                Очки сброса
              </div>

              <div className="purchase-price">
                50.00 руб
              </div>
            </div>

          </div>

          <div className="purchase-item">

            <div className="purchase-date">
              02.04.2026
            </div>

            <div className="purchase-row">
              <div className="purchase-title">
                Набр инструментов
              </div>

              <div className="purchase-price">
                100.00 руб
              </div>
            </div>

          </div>

          <p className="show-more">
            Показать все
          </p>

        </div>

        {/* SETTINGS */}
        <div ref={settingsRef} className="section">

          <h2 className="section-title">
            Настройки
          </h2>

          <div className="input-group">
            <label>Игровой ник</label>

            <input
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-group">
            <label>Почта</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="input-group">
            <label>Пароль</label>

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <button className="save-btn" onClick={toggleEdit}>
            {editing ? "Сохранить" : "Изменить"}
          </button>
          
          <button className="logout-btn">
            Выйти
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;