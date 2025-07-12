import express from 'express';
import {
  obtenerConfiguracionPorFecha,
  guardarConfiguracion,
} from '../controllers/configuracionesReservasController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Configuración de Reservas
 *   description: Configuración de horarios por día para las reservas
 */

/**
 * @swagger
 * /reservasConfiguracion:
 *   get:
 *     summary: Obtener la configuración de reservas para una fecha específica
 *     tags: [Configuración de Reservas]
 *     parameters:
 *       - in: query
 *         name: fecha
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha para la cual se desea obtener la configuración (formato YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Configuración obtenida correctamente
 *       404:
 *         description: No hay configuración para esa fecha
 */
router.get('/', obtenerConfiguracionPorFecha);

/**
 * @swagger
 * /reservasConfiguracion:
 *   post:
 *     summary: Guardar o actualizar la configuración de reservas para una fecha
 *     tags: [Configuración de Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-12"
 *               zonas:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nombre:
 *                       type: string
 *                     horarioInicio:
 *                       type: string
 *                       example: "12:00"
 *                     horarioFin:
 *                       type: string
 *                       example: "14:00"
 *     responses:
 *       200:
 *         description: Configuración guardada o actualizada correctamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', guardarConfiguracion);

export default router;
