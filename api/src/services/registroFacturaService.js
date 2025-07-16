import FacturaHash from '../models/FacturaHash.js';
import { generarHashFactura } from '../../utils/hashFactura.js';
import { firmarHashFactura as firmarReal } from '../../utils/firmarFactura.js';
import { firmarFacturaMock as firmarMock } from '../../utils/firmarFacturaMock.js';
import logger from '../../utils/logger.js'; // Si tienes uno configurado

const esProduccion = process.env.NODE_ENV === 'production';
const firmar = esProduccion ? firmarReal : firmarMock;

export const registrarFacturaConHash = async (datosFactura) => {
  const {
    numeroFactura,
    fechaExpedicion,
    clienteNombre,
    clienteNIF,
    productos,
    importeTotal,
  } = datosFactura;

  try {
    // Verificar si ya existe una factura con ese número
    const existente = await FacturaHash.findOne({ numeroFactura });
    if (existente) {
      throw new Error(`Ya existe una factura con número ${numeroFactura}`);
    }

    // Obtener hash anterior
    const ultimaFactura = await FacturaHash.findOne().sort({ createdAt: -1 });
    const hashAnterior = ultimaFactura ? ultimaFactura.hash : 'INICIO';

    // Generar nuevo hash
    const datosParaHash = {
      numeroFactura,
      fechaExpedicion,
      clienteNombre,
      clienteNIF,
      importeTotal,
    };
    const nuevoHash = generarHashFactura(datosParaHash, hashAnterior);

    // Firmar el hash
    const firmaDigital = await firmar(nuevoHash);

    // Crear y guardar la nueva factura
    const nuevaFactura = new FacturaHash({
      numeroFactura,
      fechaExpedicion,
      clienteNombre,
      clienteNIF,
      productos,
      importeTotal,
      hash: nuevoHash,
      hashAnterior,
      firmaDigital,
    });

    await nuevaFactura.save();
    return nuevaFactura;
  } catch (error) {
    logger.error('❌ Error al registrar factura con hash:', error);
    throw error;
  }
};
