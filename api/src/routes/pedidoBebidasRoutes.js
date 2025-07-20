/**
 * @swagger
 * tags:
 *   name: Pedidos Bebidas
 *   description: Gestión de pedidos de bebidas
 */

import { Router } from 'express';
const router = Router();
import {
  verificarPedidosMesa,
  obtenerPedidos,
  obtenerPedidosId,
  obtenerPedidosPendientes,
  obtenerPedidosFinalizados,
  actualizarPedido,
  actualizarProducto,
  eliminarPedido,
  crearPedido,
  agregarProductoBebida,
} from '../controllers/pedidoBebidasController.js';
import verificarLider from '../middlewares/verificarLider.js';

/**
 * @swagger
 * /pedido-bebidas:
 *   get:
 *     summary: Obtener todos los pedidos de bebidas
 *     tags: [Pedidos Bebidas]
 *     responses:
 *       200:
 *         description: Lista de pedidos de bebidas
 */
router.get('/', obtenerPedidos);

/**
 * @swagger
 * /pedido-bebidas/{id}:
 *   get:
 *     summary: Obtener un pedido de bebida por ID
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido obtenido correctamente
 */
router.get('/:id', obtenerPedidosId);

/**
 * @swagger
 * /pedido-bebidas/pendientes/pendientes:
 *   get:
 *     summary: Obtener pedidos de bebidas pendientes
 *     tags: [Pedidos Bebidas]
 *     responses:
 *       200:
 *         description: Lista de pedidos pendientes
 */
router.get('/pendientes/pendientes', obtenerPedidosPendientes);

/**
 * @swagger
 * /pedido-bebidas/finalizados/finalizados:
 *   get:
 *     summary: Obtener pedidos de bebidas finalizados
 *     tags: [Pedidos Bebidas]
 *     responses:
 *       200:
 *         description: Lista de pedidos finalizados
 */
router.get('/finalizados/finalizados', obtenerPedidosFinalizados);

/**
 * @swagger
 * /pedido-bebidas/pedidosBebidas/estado/{numeroMesa}:
 *   get:
 *     summary: Verificar pedidos finalizados de una mesa específica
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: numeroMesa
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de pedidos finalizados por mesa
 */
router.get('/pedidosBebidas/estado/:numeroMesa', verificarPedidosMesa);

/**
 * @swagger
 * /pedido-bebidas:
 *   post:
 *     summary: Crear un nuevo pedido de bebida
 *     tags: [Pedidos Bebidas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mesaId:
 *                 type: string
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       201:
 *         description: Pedido creado correctamente
 */
router.post('/', crearPedido, verificarLider);

/**
 * @swagger
 * /pedido-bebidas/{mesaId}/agregar-producto:
 *   post:
 *     summary: Agregar un producto de bebida a un pedido
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: mesaId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: object
 *     responses:
 *       200:
 *         description: Producto agregado correctamente
 */
router.post('/:mesaId/agregar-producto', agregarProductoBebida);

/**
 * @swagger
 * /pedido-bebidas/{id}:
 *   put:
 *     summary: Actualizar un pedido de bebida por ID
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Pedido actualizado correctamente
 */
router.put('/:id', actualizarPedido);

/**
 * @swagger
 * /pedido-bebidas/{pedidoId}/producto/{productoId}:
 *   put:
 *     summary: Actualizar el estado de un producto en un pedido
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: pedidoId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: productoId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 */
router.put('/:pedidoId/producto/:productoId', actualizarProducto);

/**
 * @swagger
 * /pedido-bebidas/{pedidoId}/{id}:
 *   delete:
 *     summary: Eliminar un producto de un pedido
 *     tags: [Pedidos Bebidas]
 *     parameters:
 *       - name: pedidoId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 */
router.delete('/:pedidoId/:id', eliminarPedido);

export default router;
