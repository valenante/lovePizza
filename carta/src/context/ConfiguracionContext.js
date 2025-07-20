import { createContext, useState, useEffect, useContext } from "react";
import api from "../utils/api";
import * as logger from "../utils/logger";

const ConfiguracionContext = createContext();

export const ConfiguracionProvider = ({ children }) => {
  const [configuracion, setConfiguracion] = useState({
    permitePedidosComida: true,
    permitePedidosBebida: true,
  });

  useEffect(() => {
    const fetchConfiguracion = async () => {
      try {
        const res = await api.get("/configuracion-global");
        setConfiguracion({
          permitePedidosComida: res.data.permitePedidosComida,
          permitePedidosBebida: res.data.permitePedidosBebida,
        });
      } catch (err) {
        logger.error("Error al obtener configuración global:", err);
      }
    };

    fetchConfiguracion();
  }, []);

  return (
    <ConfiguracionContext.Provider value={configuracion}>
      {children}
    </ConfiguracionContext.Provider>
  );
};

export const useConfiguracion = () => useContext(ConfiguracionContext);
