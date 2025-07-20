import express from 'express';
import {
  obtenerDisponibilidad,
  actualizarDisponibilidad,
} from '../controllers/disponibilidadController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Disponibilidad
 *   description: Configuración de días habilitados para reservas
 */

/**
 * @swagger
 * /disponibilidad:
 *   get:
 *     summary: Obtener configuración de disponibilidad semanal
 *     tags: [Disponibilidad]
 *     responses:
 *       200:
 *         description: Configuración actual de disponibilidad por día de la semana
 *       500:
 *         description: Error al obtener la disponibilidad
 */
router.get('/', obtenerDisponibilidad);

/**
 * @swagger
 * /disponibilidad:
 *   put:
 *     summary: Actualizar configuración de disponibilidad semanal
 *     tags: [Disponibilidad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lunes:
 *                 type: boolean
 *               martes:
 *                 type: boolean
 *               miercoles:
 *                 type: boolean
 *               jueves:
 *                 type: boolean
 *               viernes:
 *                 type: boolean
 *               sabado:
 *                 type: boolean
 *               domingo:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Disponibilidad actualizada correctamente
 *       500:
 *         description: Error al actualizar la disponibilidad
 */
router.put('/', actualizarDisponibilidad);

export default router;
