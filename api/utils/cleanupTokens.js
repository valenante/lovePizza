import TokenRevocado from '../src/models/TokenRevocado.js';

const limpiarTokensExpirados = async () => {
  try {
    await TokenRevocado.deleteMany({
      expiracion: { $lte: new Date() },
    });
  } catch (error) {
    logger.error('Error al limpiar tokens expirados:', error);
  }
};

export default limpiarTokensExpirados;
