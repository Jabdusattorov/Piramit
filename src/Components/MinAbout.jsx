import React from 'react'
import { Link } from 'react-router-dom';

const MinAbout = () => {
  return (
    <section
      id="min-about"
      className="w-100 container-fluid bg-black p-5 d-flex justify-content-center text-light gap-5"
    >
      <img src="piramit.png" alt=""  className='me-5'/>
      <div id="about-link" className='d-flex flex-column justify-content-between'>
        <h2>HAYOT BU PIRAMIDANING ICHIDA…</h2>
        <Link to="/about" className="text-decoration-none colo-light fs-4">
          Batafsil Malumot{" "}
          <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
        </Link>
      </div>
    </section>
  );
}

export default MinAbout
