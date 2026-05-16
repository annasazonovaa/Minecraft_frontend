// src/api/profileApi.js
import avatarImg from "../Components/Assets/profileAvatar.png";

/* MOCK USER */
let mockProfile = {
  id: 1,

  nickname: "Стив Джобс",

  email: "StivJobs@mail.ru",

  password: "********",

  role: "Избранник Света",

  avatar: avatarImg,

  perks: [
    "+15% опыта",
    "-20% потери статов",
    "+1 дополнительный дом"
  ],

  purchases: [
    {
      id: "donate_sungod",
      title: "[Избранник Света]",
      price: 270
    }
  ]
};

const API_URL = "http://localhost:3000/api/profile";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ПОЛУЧИТЬ ПРОФИЛЬ */
export const getProfile = async () => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Ошибка загрузки профиля");
    }

    return await res.json();
  } catch (e) {
    console.warn("API недоступен, используем mock профиль");

    await delay(300);

    return { ...mockProfile };
  }
};

/* ОБНОВИТЬ ПРОФИЛЬ */
export const updateProfile = async (updatedData) => {
  try {
    const res = await fetch(API_URL, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(updatedData)
    });

    if (!res.ok) {
      throw new Error("Ошибка обновления профиля");
    }

    return await res.json();
  } catch (e) {
    console.warn("Обновление профиля в mock режиме");

    await delay(300);

    mockProfile = {
      ...mockProfile,
      ...updatedData
    };

    return { ...mockProfile };
  }
};

/* ДОБАВИТЬ ПОКУПКУ */
export const addPurchase = async (purchase) => {
  try {
    const res = await fetch(`${API_URL}/purchase`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(purchase)
    });

    if (!res.ok) {
      throw new Error("Ошибка добавления покупки");
    }

    return await res.json();
  } catch (e) {
    console.warn("Добавление покупки в mock режиме");

    await delay(300);

    mockProfile.purchases.push(purchase);

    return {
      success: true,
      purchases: mockProfile.purchases
    };
  }
};