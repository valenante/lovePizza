import { useState, useEffect } from "react";
import api from "../utils/api";
import * as logger from '../utils/logger';
import { useCategorias } from "../context/CategoriasContext";

export const useRightBar = (mesaId) => {
  const [tipo, setTipo] = useState("plato");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [preciosSeleccionados, setPreciosSeleccionados] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [mostrarModalCategoria, setMostrarModalCategoria] = useState(false);
  const [productosCategoriaActual, setProductosCategoriaActual] = useState([]);
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [carrito, setCarrito] = useState([]); // ✅ carrito plano
  const [carritoBebidas, setCarritoBebidas] = useState([]);
  const [productosYaPedidos, setProductosYaPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { categories, fetchCategories, products, fetchProducts } = useCategorias();

  useEffect(() => { fetchCategories(tipo); }, [tipo]);
  useEffect(() => {
    if (categoriaSeleccionada) fetchProducts(categoriaSeleccionada);
  }, [categoriaSeleccionada]);

  const abrirModal = (producto) => {
    const precioSeleccionado = preciosSeleccionados[producto._id] !== undefined
      ? preciosSeleccionados[producto._id]
      : producto.tipo === "tapaRacion"
        ? producto.precios.tapa || producto.precios.racion
        : producto.precios.precioBase;

    setProductoSeleccionado({ ...producto, precioSeleccionado });
    setShowModal(true);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
    setShowModal(false);
  };

  const agregarAlCarrito = (productoPersonalizado) => {
    if (productoPersonalizado.tipo === "bebida") {
      setCarritoBebidas((prev) => [...prev, productoPersonalizado]);
    } else {
      setCarrito((prev) => [...prev, productoPersonalizado]); // ✅ ya no hay secciones
    }
    cerrarModal();
  };

  const enviarPedido = async () => {
    try {
      setIsLoading(true);

      if (carrito.length > 0) {
        const payloadPlatos = carrito.map(p => ({
          producto: p._id,
          cantidad: p.cantidad,
          total: p.precioSeleccionado * p.cantidad,
          precioSeleccionado: p.precioSeleccionado,
          tipoPrecio: p.tipoPrecio,
          tipoPlato: p.tipoPlato || null,
          acompanante: p.acompanante || null,
          tipo: p.tipo,
          categoria: p.categoria,
          ingredientes: p.ingredientes || [],
          opcionesPersonalizables: p.opciones
            ? Object.entries(p.opciones).map(([tipo, opcion]) => ({ tipo, opcion }))
            : [],
          mensaje: p.mensaje || "",
          adicionales: p.adicionales || [],
        }));

        await api.post(`/pedidos/${mesaId}/agregar-producto`, { productos: payloadPlatos });
      }

      if (carritoBebidas.length > 0) {
        const payloadBebidas = carritoBebidas.map(p => ({
          producto: p._id,
          cantidad: p.cantidad,
          total: p.precioSeleccionado * p.cantidad,
          precioSeleccionado: p.precioSeleccionado,
          tipoPrecio: p.tipoPrecio,
          acompanante: p.acompanante || null,
          tipo: p.tipo,
          categoria: p.categoria,
          mensaje: p.mensaje || "",
        }));

        await api.post(`/pedidosBebidas/${mesaId}/agregar-producto`, { productos: payloadBebidas });
      }

      setCarrito([]); // ✅ limpiar carrito plano
      setCarritoBebidas([]);
      setMensajeAlerta({ tipo: "exito", mensaje: "Pedido enviado correctamente." });
    } catch (error) {
      logger.error("Error al enviar el pedido:", error);
      setMensajeAlerta({ tipo: "error", mensaje: "Error al enviar el pedido." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickCategoria = async (categoria) => {
    setCategoriaSeleccionada(categoria);
    const productosCargados = await fetchProducts(categoria);
    setProductosCategoriaActual(productosCargados);

    try {
      const { data } = await api.get(`/pedidos/mesa/${mesaId}`);
      setProductosYaPedidos(data || []);
    } catch (error) {
      if (error.response?.status === 404) {
        // 🟡 La mesa aún no tiene pedidos, es totalmente normal
        setProductosYaPedidos([]);
        console.info(`[TPV ℹ️] Mesa ${mesaId} sin pedidos actuales.`);
      } else {
        logger.error("❌ Error real al obtener el pedido de la mesa:", error);
      }
    }
    setMostrarModalCategoria(true);
  };

  return {
    tipo,
    setTipo,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    productoSeleccionado,
    preciosSeleccionados,
    setPreciosSeleccionados,
    showModal,
    abrirModal,
    cerrarModal,
    agregarAlCarrito,
    carrito,
    setCarrito,
    carritoBebidas,
    setCarritoBebidas,
    enviarPedido,
    mensajeAlerta,
    setMensajeAlerta,
    isLoading,
    mostrarResumen,
    setMostrarResumen,
    categories,
    handleClickCategoria,
    mostrarModalCategoria,
    productosCategoriaActual,
    productosYaPedidos,
    setMostrarModalCategoria
  };
};
