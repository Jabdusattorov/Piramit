import React from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';

import "./ComponentsPage1/page3plans.scss"

import { data } from './../Data/data';

const Page3Plans = () => {
  return (
    <div>
      <Nav />

      <div className="container">
        <h1>Qavat planlari</h1>

        <h2>Kelajakka bugun ega bo'ling.</h2>
        <p>Piramit Rezisentsiyasi – ‘hashamat bu qulaylik’ iborasi inobatga olingan holda rejalashtirgan bo’lib, plani esa kelajakdagi ehtiyojlarning barchasi nazarda tutilgan holda chizilgan. Hoh investitsiya sifatida, hoh yashash uchun joy oling, Piramit Tower kelajak hayot rejalaringizni o’zgartirib yuboradi.</p>

      <div className="btns">
        <button>
          Turar Joy Planlari
        </button>
        <button>
          Ofis Qavatlari Planlari
        </button>
      </div>


      <div className="cards">
        {data.map((d)=>(
          <div className="card" key={d.id}>
            <img src={d.url} alt="" />
            <div className="card-info">
              <h2>{d.description}</h2>
              <p>{d.title}</p>
              <a href="/plans:id">Batafsil</a>
            </div>
          </div>
        ))}

      </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page3Plans
