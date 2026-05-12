import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './StartGame.css';

import bgImage from './assets/bg.png'; // вставь свой фон сюда

function StartGame() {
  return (
    <div className="page">
      <Header />

      <main 
        className="hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay">
          <h1 className="title">
            Добро пожаловать на сервер
            <br />
            <span>DeathSwear</span>
          </h1>

          <p className="subtitle">
            Мир жив, но гниёт. Свет и смерть переплелись.
          </p>

          <button className="start-button">
            начать игру
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StartGame;