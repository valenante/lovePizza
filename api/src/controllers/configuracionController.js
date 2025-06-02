import ConfiguracionRestaurante from '../models/ConfiguracionRestaurante.js';

// Obtener configuración (si no existe, la crea con valores por defecto)
export const obtenerConfiguracion = async (req, res) => {
  try {
    let config = await ConfiguracionRestaurante.findOne();
    if (!config) {
      config = await ConfiguracionRestaurante.create({});
    }
    res.json(config);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: 'Error al obtener la configuración', error });
  }
};

// Actualizar configuración (uno o ambos campos)
export const actualizarConfiguracion = async (req, res) => {
  console.log('Actualizando configuración global');
  try {
    const { permitePedidosComida, permitePedidosBebida } = req.body;
    let config = await ConfiguracionRestaurante.findOne();
    if (!config) {
      config = await ConfiguracionRestaurante.create({});
    }

    if (permitePedidosComida !== undefined)
      config.permitePedidosComida = permitePedidosComida;

    if (permitePedidosBebida !== undefined)
      config.permitePedidosBebida = permitePedidosBebida;

    await config.save();
    res.json(config);
  } catch (error) {
    logger.error('Error al actualizar la configuración:', error);
    res
      .status(500)
      .json({ mensaje: 'Error al actualizar la configuración', error });
  }
};
