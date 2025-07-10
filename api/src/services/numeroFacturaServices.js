
import ContadorFactura from '../models/ContadorFactura.js';

export const obtenerNumeroFactura = async () => {
  console.log("Obteniendo número de factura...");
  const year = new Date().getFullYear();
  let contador = await ContadorFactura.findOne({ year });

  if (!contador) {
    contador = new ContadorFactura({ year, lastNumber: 1 });
  } else {
    contador.lastNumber += 1;
  }

  await contador.save();
  console.log(`Número de factura obtenido: ${contador.lastNumber} para el año ${year}`);
  return `${year}-${contador.lastNumber.toString().padStart(4, '0')}`;
};
