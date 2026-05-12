import React, { useState } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './StartGame.css';

import mainBg from '../../assets/main-bg.jpg';
import loreBg from '../../assets/lore-bg.jpg';
import classesBg from '../../assets/classes-bg.jpg';
import bossesBg from '../../assets/bosses-bg.jpg';
import petsBg from '../../assets/pets-bg.jpg';
import itemsBg from '../../assets/items-bg.jpg';

import img1 from '../../assets/preview.png';
import img2 from '../../assets/preview2.png';
import img3 from '../../assets/preview3.png';

const sections = [
  {
    title: 'Классы',
    text: 'В этом мире существует множество классов: такие как берсерк, некромант и другие. Каждый из них обладает своими уникальными способностями!  Выбирай кем станешь ты: призывателем нечести, магом или простым человеком, и отправляйся покорять мир!',
    bg: classesBg,
    images: [img1, img2, img3],
  },
  {
    title: 'Боссы',
    text: 'Интересные боссы с необычными механиками будут ждать вас в неожиданных местах, проверьте свои силы, вызовите их на бой!',
    bg: bossesBg,
    images: [img1, img2],
  },
  {
    title: 'Питомцы',
    text: 'На вашем пути могут встретиться разные существа, отнеситесь к ним с добротой, и кто знает, возможно они станут преданными друзьями и помогут в трудную минуту.',
    bg: petsBg,
    images: [img2, img3],
  },
  {
    title: 'Кастомные предметы',
    text: 'На сервере есть много уникальных предметов хранящих в себе историю многих событий, создавайте их и соберите воедино нвсе крупицы информации.',
    bg: itemsBg,
    images: [img1, img3],
  },
];

function StartGame() {
  const [currentImage, setCurrentImage] = useState({});

  const prevImage = (i) => {
    setCurrentImage((prev) => {
      const current = prev[i] ?? 0;
      const max = sections[i].images.length;

      return {
        ...prev,
        [i]: current === 0 ? max - 1 : current - 1,
      };
    });
  };

  const nextImage = (i) => {
    setCurrentImage((prev) => {
      const current = prev[i] ?? 0;
      const max = sections[i].images.length;

      return {
        ...prev,
        [i]: (current + 1) % max,
      };
    });
  };

  return (
    <div className="page">

      <Header />

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${mainBg})` }}>
        <div className="overlay">
          <h1 className="title">
            Добро пожаловать
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
      </section>

      {/* LORE */}
      <section className="lore-section" style={{ backgroundImage: `url(${loreBg})` }}>
        <div className="lore-content">

          <div className="lore-text">
            <h2>Об игре</h2>
            <p>Многие столетия мир жил под покровом
              DeathSwear — Клятвы, державшей равновесие.
              Но ничто не вечно, даже божественная печать.
              В день, когда над горизонтом звёзды погасли на миг,
              в глубинах Прахрени вновь вздрогнуло Сердце Бед.
              Его биение было услышано в каждом уголке мира:
              земля стонала, вода горела,
              а мёртвые начали вставать без призыва.
              Так началась Эпоха Возвращённых.
              </p>
            <p>
              Вы - один из призванных в этот мир. 
              Узнайте историю создания клятвы, погрузитесь
              в увлекательное путешествие по фентези миру
              и одолейте древнее божество, сбившееся с пути...
              </p>
          </div>

          <img src={img1} alt="lore" className="lore-image" />

        </div>
      </section>

      {/* СЕКЦИИ */}
      {sections.map((section, i) => (
        <section
          key={i}
          className="info-section"
          style={{ backgroundImage: `url(${section.bg})` }}
        >
          <div className="info-content">

            <h2>{section.title}</h2>

            <div className="image-slider">

              <button className="arrow" onClick={() => prevImage(i)}>
                ◀
              </button>

              <img
                src={section.images[currentImage[i] ?? 0]}
                alt="preview"
                className="preview-image"
              />

              <button className="arrow" onClick={() => nextImage(i)}>
                ▶
              </button>

            </div>

            <p>{section.text}</p>

          </div>
        </section>
      ))}

      <Footer />

    </div>
  );
}

export default StartGame;