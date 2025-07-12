import { Router } from 'express';
const router = Router();
import {
  pedirCuenta,
  imprimirCuenta,
} from '../controllers/cuentaController.js';

/**
 * @swagger
 * tags:
 *   name: Cuenta
 *   description: Solicitud e impresión de cuenta
 */

/**
 * @swagger
 * /cuenta/pedir-cuenta/{numeroMesa}:
 *   post:
 *     summary: Solicitar la cuenta de una mesa
 *     tags: [Cuenta]
 *     parameters:
 *       - in: path
 *         name: numeroMesa
 *         schema:
 *           type: string
 *         required: true
 *         description: Número de la mesa que solicita la cuenta
 *     responses:
 *       200:
 *         description: Solicitud de cuenta registrada correctamente
 *       404:
 *         description: Mesa no encontrada
 *       500:
 *         description: Error del servidor
 */
router.post('/pedir-cuenta/:numeroMesa', pedirCuenta);

/**
 * @swagger
 * /cuenta/{id}/imprimir-cuenta:
 *   post:
 *     summary: Imprimir la cuenta por ID de la mesa o pedido
 *     tags: [Cuenta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID relacionado con la cuenta a imprimir
 *     responses:
 *       200:
 *         description: Cuenta enviada a impresión correctamente
 *       404:
 *         description: Cuenta no encontrada
 *       500:
 *         description: Error del servidor
 */
router.post('/:id/imprimir-cuenta', imprimirCuenta);

export default router;
