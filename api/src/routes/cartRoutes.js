import { Router } from 'express';
const router = Router();

import {
  eliminarDelCarrito,
  agregarAlCarrito,
  actualizarItem,
  obtenerCarrito,
  vaciarCarrito,
} from '../controllers/cartController.js';

import { check } from 'express-validator';
import verificarLider from '../middlewares/verificarLider.js';

/**
 * @swagger
 * tags:
 *   name: Carrito
 *   description: Operaciones relacionadas con el carrito de compras
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Obtener el carrito actual del usuario
 *     tags: [Carrito]
 *     responses:
 *       200:
 *         description: Carrito obtenido correctamente
 */
router.get('/', obtenerCarrito);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Agregar un producto al carrito
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: "60f1b0c1234567890abc1234"
 *               cantidad:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 */
router.post(
  '/',
  [
    check('productId', 'El ID del producto es obligatorio.').isMongoId(),
    check('cantidad', 'La cantidad debe ser un número positivo.').isInt({ min: 1 }),
  ],
  agregarAlCarrito
);

/**
 * @swagger
 * /cart:
 *   put:
 *     summary: Actualizar la cantidad de un producto en el carrito
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: string
 *                 example: "60f1b0c1234567890abc1234"
 *               cantidad:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 */
router.put(
  '/',
  [
    check('itemId', 'El ID del item es obligatorio.').isMongoId(),
    check('cantidad', 'La cantidad debe ser un número positivo.').isInt({ min: 1 }),
  ],
  actualizarItem
);

/**
 * @swagger
 * /cart/{itemId}:
 *   delete:
 *     summary: Eliminar un producto específico del carrito
 *     tags: [Carrito]
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del item a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito
 */
router.delete('/:itemId', eliminarDelCarrito, verificarLider);

/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Vaciar completamente el carrito
 *     tags: [Carrito]
 *     responses:
 *       200:
 *         description: Carrito vaciado correctamente
 */
router.delete('/', vaciarCarrito);

export default router;
