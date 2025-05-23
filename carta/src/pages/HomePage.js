import React from "react";
import "../styles/Home.css";
import TopBar from "../components/Navbar/Topbar";
import Carrousel from "../components/Carrousel/Carrousel";
import pizza2 from "../assets/images/pizza2.jpg";
import pizza3 from "../assets/images/pizza3.jpg";
import pizza4 from "../assets/images/pizza4.jpg";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="home-container">
        <section className="hero">
          <div className="carousel">
            <Carrousel />
          </div>
        </section>

        <section className="features">
          <div className="features-title">
            <h2>¿Por qué elegirnos?</h2>
          </div>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-image-wrapper">
                <img src={pizza2} alt="Ambiente" />
                <div className="feature-text">
                  <h3>AMBIENTE ACOGEDOR</h3>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-image-wrapper">
                <img src={pizza3} alt="Ubicación" />
                <div className="feature-text">
                  <h3>UBICACIÓN ESTRATÉGICA</h3>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-image-wrapper">
                <img src={pizza4} alt="Gastronomía" />
                <div className="feature-text">
                  <h3>SERVICIO Y GASTRONOMÍA</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🌍 Mapa y botón de cómo llegar */}
        <section className="map-section">
          <div className="map-wrapper">
            <iframe
              title="Love Pizza"
              src="https://www.google.com/maps?q=36.62123136365459,-4.506096818111927&z=16&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=36.62123136365459,-4.506096818111927"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-llegar"
            >
              Cómo llegar
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-info">
              <h3 className="footer-title">Contacto</h3>
              <p className="footer-item">📞 Teléfono: 665 92 54 13</p>
              <p className="footer-item">📍 Dirección: Plaza Federico Garcia Lorca , 10, 29620, Torremolinos, Málaga, España</p>
            </div>

            <div className="footer-horario">
              <h3 className="footer-title">Horarios</h3>
              <p className="footer-item">Martes - Domingo</p>
              <p className="footer-item">🕐 13:00 - 17:00</p>
              <p className="footer-item">🕐 20:00 - 24:00</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Love Pizza. Todos los derechos reservados.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;
