import { Router } from 'express';
const router = Router();
import {
  getCajaDiaria,
  getCajaDiariaById,
  createCajaDiaria,
  updateCajaDiaria,
  deleteCajaDiaria,
  obtenerCajasPorRango,
} from '../controllers/cajaDiariaController.js';

/**
 * @swagger
 * tags:
 *   name: CajaDiaria
 *   description: Operaciones sobre la caja diaria
 */

/**
 * @swagger
 * /cajaDiaria:
 *   get:
 *     summary: Obtener todos los registros de caja diaria
 *     tags: [CajaDiaria]
 *     responses:
 *       200:
 *         description: Lista de cajas diarias
 */
router.get('/', getCajaDiaria);

/**
 * @swagger
 * /cajaDiaria/{id}:
 *   get:
 *     summary: Obtener un registro de caja diaria por ID
 *     tags: [CajaDiaria]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro de caja diaria
 *     responses:
 *       200:
 *         description: Registro encontrado
 *       404:
 *         description: Registro no encontrado
 */
router.get('/:id', getCajaDiariaById);

/**
 * @swagger
 * /cajaDiaria:
 *   post:
 *     summary: Crear un nuevo registro de caja diaria
 *     tags: [CajaDiaria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *               fecha:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Caja diaria creada
 */
router.post('/', createCajaDiaria);

/**
 * @swagger
 * /cajaDiaria/{id}:
 *   put:
 *     summary: Actualizar un registro de caja diaria por ID
 *     tags: [CajaDiaria]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Caja diaria actualizada
 */
router.put('/:id', updateCajaDiaria);

/**
 * @swagger
 * /cajaDiaria/{id}:
 *   delete:
 *     summary: Eliminar un registro de caja diaria por ID
 *     tags: [CajaDiaria]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registro eliminado
 */
router.delete('/:id', deleteCajaDiaria);

/**
 * @swagger
 * /cajaDiaria/rango/rango:
 *   get:
 *     summary: Obtener registros de caja diaria en un rango de fechas
 *     tags: [CajaDiaria]
 *     parameters:
 *       - in: query
 *         name: inicio
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de inicio
 *       - in: query
 *         name: fin
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de fin
 *     responses:
 *       200:
 *         description: Registros encontrados en el rango
 */
router.get('/rango/rango', obtenerCajasPorRango);

export default router;
