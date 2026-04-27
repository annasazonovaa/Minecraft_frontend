import discordIcon from './Assets/discordIcon.svg';
import homePageIcon from './Assets/homePageIcon.svg';
import profileIcon from './Assets/profileIcon.svg';
import startGameIcon from './Assets/startGameIcon.svg';
import storeIcon from './Assets/storeIcon.svg';
import telegramIcon from './Assets/telegramIcon.svg';
import tiktokIcon from './Assets/tiktokIcon.svg';
import wikiIcon from './Assets/wikiIcon.svg';
import './Header.css';
import Button from './headerButton';



const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-icon telegram-icon">
            <img 
              src={telegramIcon} 
              alt="Telegram" 
            />
          </div>
          <div className="header-icon discord-icon">
            <img 
              src={discordIcon} 
              alt="Discord" 
            />
          </div>
          <div className="header-icon tiktok-icon">
            <img 
              src={tiktokIcon} 
              alt="TikTok" 
            />
          </div>
        </div>
        
        <div className="header-buttons">
          <Button 
            icon={<img src={homePageIcon} alt="homePage-button" />}
            onClick={() => console.log('Главная')}
            width={191}
          >
            Главная
          </Button>
          
          <Button 
            icon={<img src={startGameIcon} alt="startGame-button" />}
            onClick={() => console.log('Начать игру')}
            width={232}
          >
            Начать игру
          </Button>

            <Button 
            icon={<img src={wikiIcon} alt="wiki-button" />}
            onClick={() => console.log('Вики')}
            width={144}
          >
            Вики
          </Button>

            <Button 
            icon={<img src={storeIcon} alt="store-button" />}
            onClick={() => console.log('Магазин')}
            width={192}
          >
            Магазин
          </Button>

          
          <Button 
            icon={<img src={profileIcon} alt="profile-button" />}
            onClick={() => console.log('Профиль')}
            width={187}
          >
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;