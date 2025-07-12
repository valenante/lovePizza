import express from "express";
import {
  obtenerExtras,
  crearExtra,
  actualizarExtra,
  eliminarExtra,
} from "../controllers/extraController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Extras
 *   description: Gestión de extras (adicionales que se pueden agregar a productos)
 */

/**
 * @swagger
 * /extras:
 *   get:
 *     summary: Obtener todos los extras
 *     tags: [Extras]
 *     responses:
 *       200:
 *         description: Lista de extras obtenida exitosamente
 *       500:
 *         description: Error al obtener los extras
 */
router.get("/", obtenerExtras);

/**
 * @swagger
 * /extras:
 *   post:
 *     summary: Crear un nuevo extra
 *     tags: [Extras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       201:
 *         description: Extra creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/", crearExtra);

/**
 * @swagger
 * /extras/{id}:
 *   put:
 *     summary: Actualizar un extra existente
 *     tags: [Extras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del extra
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Extra actualizado exitosamente
 *       404:
 *         description: Extra no encontrado
 */
router.put("/:id", actualizarExtra);

/**
 * @swagger
 * /extras/{id}:
 *   delete:
 *     summary: Eliminar un extra
 *     tags: [Extras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del extra
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Extra eliminado exitosamente
 *       404:
 *         description: Extra no encontrado
 */
router.delete("/:id", eliminarExtra);

export default router;
