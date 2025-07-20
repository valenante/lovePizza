import express from 'express';
const router = express.Router();
import {
  imprimirPlatos,
  imprimirBebidas,
  imprimirCuenta,
  imprimirFactura,
} from '../controllers/imprimirController.js';

/**
 * @swagger
 * tags:
 *   name: Impresión
 *   description: Rutas relacionadas con la impresión de platos, bebidas, cuentas y facturas
 */

/**
 * @swagger
 * /imprimir:
 *   post:
 *     summary: Imprimir platos de una mesa
 *     tags: [Impresión]
 *     responses:
 *       200:
 *         description: Platos enviados a imprimir correctamente
 *       500:
 *         description: Error al imprimir los platos
 */
router.post('/imprimir', imprimirPlatos);

/**
 * @swagger
 * /imprimir-bebidas:
 *   post:
 *     summary: Imprimir bebidas de una mesa
 *     tags: [Impresión]
 *     responses:
 *       200:
 *         description: Bebidas enviadas a imprimir correctamente
 *       500:
 *         description: Error al imprimir las bebidas
 */
router.post('/imprimir-bebidas', imprimirBebidas);

/**
 * @swagger
 * /{mesaId}/imprimir-factura:
 *   post:
 *     summary: Imprimir factura de una mesa
 *     tags: [Impresión]
 *     parameters:
 *       - in: path
 *         name: mesaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mesa
 *     responses:
 *       200:
 *         description: Factura impresa correctamente
 *       500:
 *         description: Error al imprimir la factura
 */
router.post('/:mesaId/imprimir-factura', imprimirFactura);

/**
 * @swagger
 * /{mesaId}/imprimir-cuenta:
 *   post:
 *     summary: Imprimir cuenta de una mesa
 *     tags: [Impresión]
 *     parameters:
 *       - in: path
 *         name: mesaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mesa
 *     responses:
 *       200:
 *         description: Cuenta impresa correctamente
 *       500:
 *         description: Error al imprimir la cuenta
 */
router.post('/:mesaId/imprimir-cuenta', imprimirCuenta);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Ruta de prueba de impresión
 *     tags: [Impresión]
 *     responses:
 *       200:
 *         description: Ruta de impresión activa
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Ruta de impresión de platos' });
});

export default router;
