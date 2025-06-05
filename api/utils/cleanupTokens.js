import TokenRevocado from '../src/models/TokenRevocado.js';
import logger from '../src/utils/logger.js'; // Asegúrate de tener un logger configurado

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
