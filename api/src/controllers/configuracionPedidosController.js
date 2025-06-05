import ConfiguracionPedidos from '../models/ConfiguracionPedidos.js';
import logger from '../utils/logger.js'; // Asegúrate de tener un logger configurado

export const obtenerConfiguracion = async (req, res) => {
  try {
    let config = await ConfiguracionPedidos.findOne();
    if (!config) {
      config = await ConfiguracionPedidos.create({});
    }
    res.json(config);
  } catch (error) {
    logger.error('Error al obtener configuración:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

export const actualizarConfiguracion = async (req, res) => {
  const { permitirPedidosComida, permitirPedidosBebida } = req.body;

  try {
    let config = await ConfiguracionPedidos.findOne();
    if (!config) {
      config = await ConfiguracionPedidos.create({
        permitirPedidosComida,
        permitirPedidosBebida,
      });
    } else {
      config.permitirPedidosComida =
        permitirPedidosComida ?? config.permitirPedidosComida;
      config.permitirPedidosBebida =
        permitirPedidosBebida ?? config.permitirPedidosBebida;
      await config.save();
    }

    res.json(config);
  } catch (error) {
    logger.error('Error al actualizar configuración:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};
