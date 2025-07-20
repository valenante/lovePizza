import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCategorias } from "../../context/CategoriasContext";
import * as logger from '../../utils/logger';
import api from "../../utils/api";
import "./EstadisticasFinal.css";

const EstadisticasFinal = ({ category }) => {
  const { products, fetchProducts } = useCategorias();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [, setVentasDetalles] = useState({});
  const [estadisticas, setEstadisticas] = useState({}); // Acumuladores por producto
  const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada para el filtro

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  useEffect(() => {
    const cargarEstadisticas = async () => {
      const productosFiltrados = products.filter(
        (product) => product.categoria === category
      );
      setFilteredProducts(productosFiltrados);

      const detallesVentas = {};
      const acumuladores = {};

      for (const product of productosFiltrados) {
        const ventasDetalles = await Promise.all(
          product.ventas.map(async (ventaId) => {
            try {
              const response = await api.get(`/ventas/${ventaId}`);
              return response.data;
            } catch (error) {
              logger.error(`Error al obtener la venta ${ventaId}:`, error);
              return null;
            }
          })
        );

        const ventasFiltradas = ventasDetalles.filter((venta) => {
          if (!venta) return false;
          if (!selectedDate) return true;
          const ventaFecha = new Date(venta.fecha);
          return ventaFecha.toDateString() === selectedDate.toDateString();
        });

        detallesVentas[product._id] = ventasFiltradas;

        const totalCantidad = ventasFiltradas.reduce(
          (acumulado, venta) => acumulado + venta.cantidad,
          0
        );
        const totalIngresos = ventasFiltradas.reduce(
          (acumulado, venta) => acumulado + venta.total,
          0
        );

        acumuladores[product._id] = {
          totalCantidad,
          totalIngresos,
        };
      }

      setVentasDetalles(detallesVentas);
      setEstadisticas(acumuladores);
    };

    if (products.length > 0) {
      cargarEstadisticas();
    }
  }, [products, selectedDate, category]);

  return (
    <div className="estadisticas-final--estadisticas">
      <h2 className="titulo--estadisticas">{category}</h2>

      {/* Selector de fecha */}
      <div className="filtro-fecha--estadisticas">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Selecciona una fecha"
          className="date-picker--estadisticas"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="mensaje-carga--estadisticas">Cargando productos...</p>
      ) : (
        <ul className="lista-productos--estadisticas">
          {filteredProducts.map((product) => (
            <li key={product._id} className="producto--estadisticas">
              <strong className="producto-titulo--estadisticas">Producto:</strong> {product.nombre} <br />
              <strong className="producto-total--estadisticas">Total Vendido:</strong>{" "}
              {estadisticas[product._id]?.totalCantidad || 0} unidades <br />
              <strong className="producto-ingresos--estadisticas">Total Ingresos:</strong>{" "}
              {estadisticas[product._id]?.totalIngresos?.toFixed(2) || 0} € <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EstadisticasFinal;
