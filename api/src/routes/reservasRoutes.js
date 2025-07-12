/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Gestión de reservas del sistema
 */

import express from 'express';
import {
  crearReserva,
  obtenerReservas,
  cancelarReserva,
  confirmarReserva,
  obtenerFechasConReservas,
  obtenerReservasPorFecha,
} from '../controllers/reservasController.js';

const router = express.Router();

/**
 * @swagger
 * /reservas:
 *   post:
 *     summary: Crear una nueva reserva (cliente público)
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - correo
 *               - telefono
 *               - personas
 *               - hora
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *               telefono:
 *                 type: string
 *               personas:
 *                 type: integer
 *               hora:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/', crearReserva);

/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Obtener todas las reservas (TPV)
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', obtenerReservas);

/**
 * @swagger
 * /reservas/{id}/cancelar:
 *   put:
 *     summary: Cancelar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva cancelada correctamente
 */
router.put('/:id/cancelar', cancelarReserva);

/**
 * @swagger
 * /reservas/{id}/confirmar:
 *   put:
 *     summary: Confirmar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva confirmada correctamente
 */
router.put('/:id/confirmar', confirmarReserva);

/**
 * @swagger
 * /reservas/fecha:
 *   get:
 *     summary: Obtener reservas por fecha y estado
 *     tags: [Reservas]
 *     parameters:
 *       - in: query
 *         name: fecha
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha en formato YYYY-MM-DD
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [pendiente, confirmada, cancelada]
 *         description: Estado de la reserva
 *     responses:
 *       200:
 *         description: Lista de reservas según filtros
 */
router.get('/fecha', obtenerReservasPorFecha);

/**
 * @swagger
 * /reservas/fechasReserva:
 *   get:
 *     summary: Obtener todas las fechas con reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de fechas con al menos una reserva
 */
router.get('/fechasReserva', obtenerFechasConReservas);

export default router;
