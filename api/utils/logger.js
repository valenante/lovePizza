import { createLogger, format, transports } from 'winston';

// Definir formato de logs
const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(
    ({ timestamp, level, message }) =>
      `[${timestamp}] ${level.toUpperCase()}: ${message}`
  )
);

// Crear el logger
const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: logFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new transports.File({ filename: 'logs/rate-limit.log', level: 'warn' }),
  ],
});

// Exportar el logger como default
export default logger;
