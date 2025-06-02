// models/ConfiguracionRestaurante.js (ejemplo)
import mongoose from 'mongoose';
import { model } from 'mongoose';

const configuracionRestauranteSchema = new mongoose.Schema({
  permitePedidosComida: { type: Boolean, default: true },
  permitePedidosBebida: { type: Boolean, default: true },
  // otras configuraciones...
});

export default model(
  'configuracionRestaurante',
  configuracionRestauranteSchema
);
