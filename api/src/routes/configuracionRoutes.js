import { Router } from 'express';
const router = Router();

import {
  obtenerConfiguracion,
  actualizarConfiguracion,
} from '../controllers/configuracionController.js';

/**
 * @swagger
 * tags:
 *   name: Configuración Global
 *   description: Configuración general del sistema
 */

/**
 * @swagger
 * /configuracion-global:
 *   get:
 *     summary: Obtener configuración global
 *     tags: [Configuración Global]
 *     responses:
 *       200:
 *         description: Configuración global obtenida correctamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', obtenerConfiguracion);

/**
 * @swagger
 * /configuracion-global:
 *   put:
 *     summary: Actualizar configuración global
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
 *         description: Error del servidor
 */
router.put('/', actualizarConfiguracion);

export default router;
