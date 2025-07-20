import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Home.css";
import TopBar from "../components/Navbar/Topbar";
import Carrousel from "../components/Carrousel/Carrousel";
import Pizza2 from "../assets/images/pizza2.jpg";
import Pizza3 from "../assets/images/pizza3.jpg";
import Pizza4 from "../assets/images/pizza4.jpg";

const Home = () => {
  const restaurantName = process.env.REACT_APP_NOMBRE_RESTAURANTE || "Love Pizza";

  return (
    <>
      <Helmet>
        <title>{restaurantName} - Pizzería en Torremolinos | Carta Online</title>
        <meta
          name="description"
          content={`Descubre ${restaurantName}, la mejor pizzería de Torremolinos. Consulta nuestra carta online, ubicación y horarios. ¡Haz tu pedido ahora!`}
        />
        <meta
          name="keywords"
          content="Love Pizza, pizzería Torremolinos, carta online, restaurante, comida italiana, pizza artesanal"
        />
        <meta property="og:title" content={`${restaurantName} - Pizzería en Torremolinos`} />
        <meta
          property="og:description"
          content="Consulta la carta online de Love Pizza y ven a disfrutar de las mejores pizzas artesanales en el corazón de Torremolinos."
        />
        <meta property="og:image" content="https://tusitio.com/images/preview-pizza.jpg" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://tusitio.com" />

        {/* Datos estructurados tipo Restaurante */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": restaurantName,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plaza Federico Garcia Lorca nu.1",
              "addressLocality": "Torremolinos",
              "addressRegion": "Málaga",
              "addressCountry": "ES"
            },
            "telephone": "+34 631 50 70 83",
            "servesCuisine": "Italiana, Pizza",
            "openingHours": ["Miércoles-Domingo 13:00-17:00", "Miércoles-Domingo 20:00-24:00"],
            "image": "https://tusitio.com/images/preview-pizza.jpg",
            "url": "https://tusitio.com"
          })}
        </script>
      </Helmet>

      <TopBar />
      <main className="home-container">
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
            <article className="feature">
              <div className="feature-image-wrapper">
                <img src={Pizza2} alt="Pizzas caseras hechas con amor" />
                <div className="feature-text">
                  <h3>PIZZAS CON AMOR</h3>
                </div>
              </div>
            </article>
            <article className="feature">
              <div className="feature-image-wrapper">
                <img src={Pizza3} alt="Servicio excepcional y cocina italiana auténtica" />
                <div className="feature-text">
                  <h3>SERVICIO Y GASTRONOMÍA</h3>
                </div>
              </div>
            </article>
            <article className="feature">
              <div className="feature-image-wrapper">
                <img src={Pizza4} alt="La mejor pizza de Torremolinos" />
                <div className="feature-text">
                  <h3>LA MEJOR PIZZA DE TORREMOLINOS</h3>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="map-section">
          <div className="map-wrapper">
            <iframe
              title="Ubicación del restaurante Love Pizza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.735528042323!2d-4.5086288!3d36.6210807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fb86d1b6a76d%3A0x82b300589bd9dd3b!2sLove%20Pizza!5e0!3m2!1ses!2ses!4v1717220000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=36.6210807,-4.5060539"
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
              <p className="footer-item">📞 Teléfono: 631 50 70 83</p>
              <p className="footer-item">📍 Plaza Federico Garcia Lorca nu.1, Torremolinos, Málaga, España</p>
            </div>

            <div className="footer-horario">
              <h3 className="footer-title">Horarios</h3>
              <p className="footer-item">Miércoles - Domingo</p>
              <p className="footer-item">🕐 13:00 - 17:00</p>
              <p className="footer-item">🕐 20:00 - 24:00</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {restaurantName}. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
