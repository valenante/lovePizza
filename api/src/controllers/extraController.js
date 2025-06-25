import Extra from "../models/Extras.js";

// Obtener todos los extras
export const obtenerExtras = async (req, res) => {
  try {
    const extras = await Extra.find().sort({ createdAt: -1 });
    res.json(extras);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los extras", error });
  }
};

// Crear un nuevo extra
export const crearExtra = async (req, res) => {
  try {
    const { nombre, precio, activo = true, disponiblePara = ["comida", "bebida"] } = req.body;

    if (!nombre || typeof precio !== "number") {
      return res.status(400).json({ mensaje: "Nombre y precio son obligatorios" });
    }

    const nuevoExtra = new Extra({ nombre, precio, activo, disponiblePara });
    await nuevoExtra.save();
    res.status(201).json(nuevoExtra);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el extra", error });
  }
};

// Modificar un extra existente
export const actualizarExtra = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const extraActualizado = await Extra.findByIdAndUpdate(id, datos, {
      new: true,
      runValidators: true,
    });

    if (!extraActualizado) {
      return res.status(404).json({ mensaje: "Extra no encontrado" });
    }

    res.json(extraActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el extra", error });
  }
};

// Eliminar un extra
export const eliminarExtra = async (req, res) => {
  try {
    const { id } = req.params;
    const extraEliminado = await Extra.findByIdAndDelete(id);

    if (!extraEliminado) {
      return res.status(404).json({ mensaje: "Extra no encontrado" });
    }

    res.json({ mensaje: "Extra eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el extra", error });
  }
};
