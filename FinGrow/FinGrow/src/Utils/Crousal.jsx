import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import crousel1 from '../assets/img/fingrow-loan.png';
import crousel2 from '../assets/img/loan-fingrow-detail.png';
import crousel3 from '../assets/img/untitled design (3).png';
import crousel4 from '../assets/img/personal-loan.png';

function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Adjusts the speed (in milliseconds)
    >
      <style>
        {`
          #carouselExampleAutoplaying::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={crousel2} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={crousel3} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={crousel1} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={crousel4} className="d-block w-100" alt="Slide 4" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
