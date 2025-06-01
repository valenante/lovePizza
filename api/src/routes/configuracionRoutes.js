import { Router } from "express";
const router = Router();

import {
  obtenerConfiguracion,
  actualizarConfiguracion,
} from "../controllers/configuracionController.js";

// GET /api/configuracion-global
router.get("/", obtenerConfiguracion);

// PUT /api/configuracion-global
router.put("/", actualizarConfiguracion);

export default router;
