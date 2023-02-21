import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.scss"

const Nav = () => {
  function btn(){
    document.querySelector(".modal").style.transform='translateX(0%)'
    document.querySelector(".modal-2").style.backgroundColor = "rgba(0, 0, 0, 0.45)"
  }
  function close(){
    document.querySelector(".modal").style.transform='translateX(-100%)'
    document.querySelector(".modal-2").style.backgroundColor = "transparent"
  }
  return (
    <nav>
      <button id='modal-btn' onClick={btn}>
      <i className="fa-solid fa-table-cells-large"></i>
        Menu
      </button>
        <img src="http://www.piramit.uz/assets/img/piramit.png" alt="" />
        <div>
        <a href="tel:+998787773333">
            <i className="fa-solid fa-phone"></i> +998 78 777 33 33
        </a>
        <div className="language">
            <button>TR</button>
            <button>UZ</button>
            <button>RU</button>
        </div>
        </div>

        <div className="modal">
         <div className="modal-1">
         <Link to="#">Bosh sahifa</Link>
          <Link to="#">Biz haqimizda</Link>
          <Link to="#">Joylashuv</Link>
          <Link to="#">Me'moriy Yechim</Link>
          <Link to="#">Qavat planlari</Link>
          <Link to="#">Hayot</Link>
          <Link to="#">Matbuotda Biz</Link>
          <Link to="#">FotoGalereya</Link>
          <a href="http://www.piramit.uz/assets/ekatalog.pdf" className='a'>Elektron katalog</a>
          <a href="#" className='a'>Aloqa</a>
         </div>
         <div className="modal-2" onClick={close}></div>
        </div>
    </nav>
  )
}

export default Nav
