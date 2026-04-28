import './Start_game.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function Start_game() {
  return (
    <div className="Start_game">
      <Header />
      <div className="content">
       <div className="card">
        <h1>Как начать игру на сервере?</h1>
          <ol>
            <li>Запусти Minecraft: Java Edition</li>
            <li>В "Мультиплеер" нажми "Добавить сервер"</li>
            <li>Введи IP сервера</li>
            <li>Подтверди и залогинься чтобы присоединиться к игре!</li>
          </ol>
          <img src={require('./content.png')} className="picture" alt="content" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Start_game;
