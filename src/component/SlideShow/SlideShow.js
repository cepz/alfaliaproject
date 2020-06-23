import React from "react";

import { slide } from "../Images";

function SlideShow() {
  return (
    <div className="container mt-2 pt-2">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slide.map((carusel) => (
            <div
              key={carusel.id}
              className={
                carusel.id === 1 ? "carousel-item active" : "carousel-item"
              }
            >
              <img
                src={carusel.src}
                className="d-block w-100"
                alt={carusel.alt}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
