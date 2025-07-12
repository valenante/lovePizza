import express from 'express';
import {
  obtenerConfiguracion,
  actualizarConfiguracion,
} from '../controllers/configuracionPedidosController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Configuración Global
 *   description: Configuración general del sistema (por ejemplo, permitir comida o bebida)
 */

/**
 * @swagger
 * /configuracion-global:
 *   get:
 *     summary: Obtener la configuración global actual del sistema
 *     tags: [Configuración Global]
 *     responses:
 *       200:
 *         description: Configuración obtenida correctamente
 *       500:
 *         description: Error al obtener la configuración
 */
router.get('/', obtenerConfiguracion);

/**
 * @swagger
 * /configuracion-global:
 *   patch:
 *     summary: Actualizar la configuración global del sistema
 *     tags: [Configuración Global]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               permitirPedidosComida: true
 *               permitirPedidosBebida: false
 *     responses:
 *       200:
 *         description: Configuración actualizada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al actualizar la configuración
 */
router.patch('/', actualizarConfiguracion);

export default router;
