/**
 * @swagger
 * tags:
 *   name: Valoraciones
 *   description: Gestión de valoraciones de productos y pedidos
 */

import { Router } from 'express';
const router = Router();
import {
  valorarPedido,
  crearValoraciones,
  obtenerProductosValorados,
} from '../controllers/valoracionesController.js';

/**
 * @swagger
 * /valoraciones/productos-valoraciones/productos-valoraciones:
 *   get:
 *     summary: Obtener productos disponibles para valorar por parte del cliente
 *     tags: [Valoraciones]
 *     responses:
 *       200:
 *         description: Lista de productos valorables
 */
router.get('/productos-valoraciones/productos-valoraciones', valorarPedido);

/**
 * @swagger
 * /valoraciones:
 *   post:
 *     summary: Crear nuevas valoraciones
 *     tags: [Valoraciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - valoraciones
 *             properties:
 *               valoraciones:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                       description: ID del producto valorado
 *                     estrellas:
 *                       type: integer
 *                       minimum: 1
 *                       maximum: 5
 *                     comentario:
 *                       type: string
 *     responses:
 *       201:
 *         description: Valoraciones creadas correctamente
 */
router.post('/', crearValoraciones);

/**
 * @swagger
 * /valoraciones/valoraciones/mas-valorados:
 *   get:
 *     summary: Obtener productos más valorados
 *     tags: [Valoraciones]
 *     responses:
 *       200:
 *         description: Lista de productos mejor valorados
 */
router.get('/valoraciones/mas-valorados', obtenerProductosValorados);

export default router;
