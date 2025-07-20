/**
 * @swagger
 * tags:
 *   name: Contraseña
 *   description: Gestión de contraseña de acceso
 */

import { Router } from 'express';
const router = Router();
import {
  obtenerPassword,
  crearActualizarPassword,
  actualizarPassword,
  validarPassword,
} from '../controllers/passwordController.js';

/**
 * @swagger
 * /password:
 *   get:
 *     summary: Obtener la contraseña actual
 *     tags: [Contraseña]
 *     responses:
 *       200:
 *         description: Contraseña obtenida correctamente
 */
router.get('/', obtenerPassword);

/**
 * @swagger
 * /password:
 *   post:
 *     summary: Crear o actualizar la contraseña si no existe
 *     tags: [Contraseña]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña creada o actualizada
 */
router.post('/', crearActualizarPassword);

/**
 * @swagger
 * /password:
 *   put:
 *     summary: Actualizar la contraseña existente
 *     tags: [Contraseña]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               antigua:
 *                 type: string
 *               nueva:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada correctamente
 */
router.put('/', actualizarPassword);

/**
 * @swagger
 * /password/validate-password:
 *   post:
 *     summary: Validar si la contraseña ingresada es correcta
 *     tags: [Contraseña]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña válida
 *       401:
 *         description: Contraseña incorrecta
 */
router.post('/validate-password', validarPassword);

export default router;
