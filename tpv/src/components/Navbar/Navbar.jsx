import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api"; // asegúrate que apunta al backend
import "./Navbar.css";
import logo from "../../images/LovePizzaLogo.png"; // Asegúrate de que la ruta sea correcta
import { useEffect } from "react";

const Navbar = () => {

  const [permitirComida, setPermitirComida] = useState(true);
  const [permitirBebida, setPermitirBebida] = useState(true);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    const fetchConfiguracion = async () => {
      try {
        const { data } = await api.get("/configuracion-pedidos");
        setPermitirComida(data.permitirPedidosComida);
        setPermitirBebida(data.permitirPedidosBebida);
      } catch (error) {
        console.error("Error al cargar configuración:", error);
      }
    };
    fetchConfiguracion();
  }, []);

  const toggleComida = async () => {
    try {
      const nuevaConfig = !permitirComida;
      setPermitirComida(nuevaConfig);
      await api.patch("/configuracion-pedidos", {
        permitirPedidosComida: nuevaConfig
      });
    } catch (error) {
      console.error("Error al actualizar comida:", error);
    }
  };

  const toggleBebida = async () => {
    try {
      const nuevaConfig = !permitirBebida;
      setPermitirBebida(nuevaConfig);
      await api.patch("/configuracion-pedidos", {
        permitirPedidosBebida: nuevaConfig
      });
    } catch (error) {
      console.error("Error al actualizar bebida:", error);
    }
  };


  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      window.location.href = path;
      setSelectValue(""); // Reinicia el valor después de redirigir
    }
  };
  return (
    <nav className="navbar--navbar">
      <ul className="navbar-list--navbar">
        <li className="navbar-item--navbar">
          <Link className="navbar-link--navbar" to="/">
            <img src={logo} alt="ZF" className="navbar-logo--navbar" />
          </Link>
        </li>
        <li className="navbar-item--navbar">
          <Link className="navbar-link--navbar" to="/">Inicio</Link>
        </li>

        <li className="navbar-item--navbar only-desktop">
          <Link className="navbar-link--navbar" to="/products">Productos</Link>
        </li>
        <li className="navbar-item--navbar only-desktop">
          <Link className="navbar-link--navbar" to="/reservas">Reservas</Link>
        </li>
        <li className="navbar-item--navbar only-desktop">
          <label className="navbar-checkbox-habilitar">
            <input type="checkbox" checked={permitirComida} onChange={toggleComida} />
            Comida
          </label>
          <label className="navbar-checkbox-habilitar">
            <input type="checkbox" checked={permitirBebida} onChange={toggleBebida} />
            Bebida
          </label>
        </li>
        <li className="navbar-item--navbar only-mobile">
          <select
            className="navbar-select--navbar"
            onChange={handleSelectChange}
            value={selectValue}
          >
            <option value="" disabled>Ir a...</option>
            <option value="/products">Productos</option>
            <option value="/reservas">Reservas</option>
          </select>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;
