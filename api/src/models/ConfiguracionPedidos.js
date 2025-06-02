import mongoose from 'mongoose';

const ConfiguracionPedidosSchema = new mongoose.Schema(
  {
    permitirPedidosComida: {
      type: Boolean,
      default: true,
    },
    permitirPedidosBebida: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  'ConfiguracionPedidos',
  ConfiguracionPedidosSchema
);
