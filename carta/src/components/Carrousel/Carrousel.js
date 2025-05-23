import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import pizza1 from "../../assets/images/pizza1.jpg";
import pizza2 from "../../assets/images/pizza2.jpg";
import "../../styles/HomeCarrousel.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const HomeCarousel = () => {
  const navigate = useNavigate();

  const slides = [
    {
      src: pizza1,
      text: "Disfruta de las mejores pizzas de Torremolinos",
    },
    {
      src: pizza2,
      text: "El sabor de Italia en cada bocado",
    },
  ];

  const handleReservaClick = useCallback(() => navigate("/reservas"), [navigate]);

  const handleCartaClick = useCallback(() => navigate("/carta"), [navigate]);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-container">
            <img src={slide.src} alt={`Slide ${index + 1}`} className="carousel-img" />
            <div className="slide-overlay">
              <h2 className="title-text">{slide.text}</h2>
              <div className="carousel-buttons">
                <button className="reserva-btn" onClick={handleReservaClick}>¡RESERVA MESA!</button>
                <button className="carta-btn" onClick={handleCartaClick}>VER CARTA</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
