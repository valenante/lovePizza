import express from "express";
import {
  obtenerExtras,
  crearExtra,
  actualizarExtra,
  eliminarExtra,
} from "../controllers/extraController.js";

const router = express.Router();

router.get("/", obtenerExtras);
router.post("/", crearExtra);
router.put("/:id", actualizarExtra);
router.delete("/:id", eliminarExtra);

export default router;
