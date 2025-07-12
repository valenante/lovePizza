import { Router } from 'express';
const router = Router();

// Importar los controladores de caja
import {
  cerrarCaja,
  retirarDinero,
  integrarDinero,
  obtenerCaja,
  obtenerCajaAbierta,
} from '../controllers/cajaController.js';

/**
 * @swagger
 * tags:
 *   name: Caja
 *   description: Operaciones sobre la caja del día
 */

/**
 * @swagger
 * /caja/total:
 *   get:
 *     summary: Obtener el total actual de la caja
 *     tags: [Caja]
 *     responses:
 *       200:
 *         description: Total de la caja obtenido correctamente
 */
router.get('/total', obtenerCaja);

/**
 * @swagger
 * /caja/retirar:
 *   post:
 *     summary: Retirar dinero de la caja
 *     tags: [Caja]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *             required:
 *               - cantidad
 *     responses:
 *       200:
 *         description: Dinero retirado correctamente
 */
router.post('/retirar', retirarDinero);

/**
 * @swagger
 * /caja/integrar:
 *   post:
 *     summary: Integrar dinero a la caja
 *     tags: [Caja]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *             required:
 *               - cantidad
 *     responses:
 *       200:
 *         description: Dinero integrado correctamente
 */
router.post('/integrar', integrarDinero);

/**
 * @swagger
 * /caja/cerrar:
 *   post:
 *     summary: Cerrar la caja del día
 *     tags: [Caja]
 *     responses:
 *       200:
 *         description: Caja cerrada correctamente
 */
router.post('/cerrar', cerrarCaja);

/**
 * @swagger
 * /caja/abierta:
 *   get:
 *     summary: Obtener el estado actual de la caja (si está abierta)
 *     tags: [Caja]
 *     responses:
 *       200:
 *         description: Estado de la caja obtenido correctamente
 */
router.get('/abierta', obtenerCajaAbierta);

export default router;
