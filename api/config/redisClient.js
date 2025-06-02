// config/redisClient.js
import { createClient } from 'redis';
import logger from '../utils/logger.js'; // ✅ Esto faltaba

const redisClient = createClient({
  url: process.env.REDIS_URL ,
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 2000),
  },
});

redisClient.on('connect', () => {
  console.log('🔗 Conectado a Redis');
});
redisClient.on('ready', () => {
  console.log('✅ Redis listo para usar');
});
redisClient.on('error', (err) => {
  logger.error('❌ Error en Redis:', err); // ya no dará error
});
redisClient.on('end', () => {
  console.log('🔌 Conexión con Redis finalizada');
});

export default redisClient;
