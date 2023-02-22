import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/carousel";
const Header = () => {
  return (
    <header>
      <article id="showcase">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.piramit.uz/storage/app/public/sliderCustom/s1-d-uz.jpg"
                className="d-block w-100"
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.piramit.uz/storage/app/public/sliderCustom/s2-d-uz.jpg"
                className="d-block w-100"
                alt="2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.piramit.uz/storage/app/public/sliderCustom/s3-d-uz.jpg"
                className="d-block w-100"
                alt="3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
    </header>
  );
};

export default Header;
