
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <a id = "Contacts" href="#Contacts">Контакты</a>
        <a href="#Error">Сообщить об ошибке</a>
        <a href="#Politics">Политика конфиденциальности</a>
      </nav>
    </footer>
  );
}

export default Footer;