import express from 'express';
import {
  obtenerConfiguracion,
  actualizarConfiguracion,
} from '../controllers/configuracionPedidosController.js';

const router = express.Router();

router.get('/', obtenerConfiguracion);
router.patch('/', actualizarConfiguracion);

export default router;
