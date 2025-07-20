import { createLogger, format, transports } from 'winston';
import fs from 'fs';
import path from 'path';

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(
    ({ timestamp, level, message }) =>
      `[${timestamp}] ${level.toUpperCase()}: ${message}`
  )
);

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: logFormat,
  transports: [
    // 🖥️ Consola con colores (en dev)
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(
          ({ timestamp, level, message }) =>
            `[${timestamp}] ${level}: ${message}`
        )
      ),
    }),
    new transports.File({ filename: path.join(logsDir, 'error.log'), level: 'error' }),
    new transports.File({ filename: path.join(logsDir, 'combined.log') }),
    new transports.File({ filename: path.join(logsDir, 'rate-limit.log'), level: 'warn' }),
  ],
});

export default logger;
