import express from 'express';
const router = express.Router();
import { obtenerEliminaciones } from '../controllers/eliminacionController.js';

/**
 * @swagger
 * tags:
 *   name: Eliminaciones
 *   description: Registro de productos eliminados de pedidos
 */

/**
 * @swagger
 * /eliminaciones:
 *   get:
 *     summary: Obtener lista de eliminaciones de productos
 *     tags: [Eliminaciones]
 *     responses:
 *       200:
 *         description: Lista de productos eliminados exitosamente
 *       500:
 *         description: Error al obtener las eliminaciones
 */
router.get('/', obtenerEliminaciones);

export default router;
