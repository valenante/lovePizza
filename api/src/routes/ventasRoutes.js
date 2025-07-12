/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Gestión de ventas
 */

import { Router } from 'express';
const router = Router();
import {
  obtenerVentasPorId,
  obtenerVentas,
  crearVenta,
  actualizarVenta,
  eliminarVenta,
} from '../controllers/ventasController.js';

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/', obtenerVentas);

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la venta
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle de la venta
 *       404:
 *         description: Venta no encontrada
 */
router.get('/:id', obtenerVentasPorId);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                     cantidad:
 *                       type: integer
 *                     precio:
 *                       type: number
 *               total:
 *                 type: number
 *               fecha:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Venta creada exitosamente
 */
router.post('/', crearVenta);

/**
 * @swagger
 * /ventas/{id}:
 *   put:
 *     summary: Actualizar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la venta a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                     cantidad:
 *                       type: integer
 *                     precio:
 *                       type: number
 *               total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venta actualizada correctamente
 *       404:
 *         description: Venta no encontrada
 */
router.put('/:id', actualizarVenta);

/**
 * @swagger
 * /ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la venta a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta eliminada correctamente
 *       404:
 *         description: Venta no encontrada
 */
router.delete('/:id', eliminarVenta);

export default router;
