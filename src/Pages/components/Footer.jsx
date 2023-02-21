import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="foot-1">
        <img src="http://www.piramit.uz/assets/img/piramit.png" alt="" />
        <div>
            <h4>Savdo Ofisi:</h4>
            <span>Sh.Rustaveli ko'chasi</span><br />  
            <span>Toshkent shahri,</span><br />  
            <span>Yakkasaroy tumani, 53B,</span><br />  
            <span>100100</span><br />  
        </div>
        <div>
            <h4>Ommaviy tarmoqlar</h4>
            <a href="https://www.facebook.com/piramit.uz/">Facebook</a><br />
            <a href="https://www.instagram.com/piramit.uz/?utm_medium=copy_link">Instagram</a><br />
            <a href="https://t.me/piramit_uz">Telegram</a><br />
        </div>
        <div>
          <h4>Aloqa:</h4>
          <a href="tel:+998787773333">+998 78 777 33 33</a><br />
          <a href="mailto:info@piramit.uz">info@piramit.uz</a><br />
        </div>
      </div>
      <div className="foot-2">
        <Link to="#">Biz <br /> haqimizda</Link>
        <Link to="#">Joylashuv</Link>
        <Link to="#">Me'moriy <br /> Yachim</Link>
        <Link to="#">Qavat <br /> planlari</Link>
        <Link to="#">Hayot</Link>
        <Link to="#">Foto<br /> Galereya</Link>
        <Link to="#">Elektron <br />katalog</Link>
        <Link to="#">Aloqa</Link>
      </div>
    </footer>
  )
}

export default Footer
