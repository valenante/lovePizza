// models/Extra.js
import mongoose from "mongoose";

const ExtraSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    activo: {
      type: Boolean,
      default: true,
    },
    disponiblePara: {
      type: [String], // Ejemplo: ['comida', 'bebida']
      default: ["comida", "bebida"],
    },
  },
  {
    timestamps: true,
  }
);

const Extra = mongoose.model("Extra", ExtraSchema);
export default Extra;
