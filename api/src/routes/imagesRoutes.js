import { Router } from 'express';
import upload from '../middlewares/upload.js';
import { subirImagen } from '../controllers/imagesController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Imágenes
 *   description: Subida de imágenes al servidor
 */

/**
 * @swagger
 * /images/upload-image:
 *   post:
 *     summary: Subir una imagen
 *     tags: [Imágenes]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Archivo de imagen a subir
 *     responses:
 *       200:
 *         description: Imagen subida correctamente
 *       400:
 *         description: No se proporcionó ninguna imagen
 *       500:
 *         description: Error al subir la imagen
 */
router.post('/upload-image', upload.single('file'), subirImagen);

export default router;
