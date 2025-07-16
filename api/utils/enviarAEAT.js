// utils/enviarAEAT.js
export const enviarFacturaAEAT = async (factura) => {
  const esProduccion = process.env.NODE_ENV === 'production';

  if (!esProduccion) {
    console.log('🔧 Simulación de envío a Hacienda:', factura.numeroFactura);
    return 'simulado';
  }

  try {
    // Aquí iría la lógica real de envío a AEAT o VERI*FACTU
    // Por ejemplo, mediante XML firmado con XAdES y POST a la sede electrónica.
    const respuesta = await axios.post('https://api.verifactu.es/facturas', {
      facturaXmlFirmada: factura.xmlFirmado,
      numeroFactura: factura.numeroFactura,
      firmaDigital: factura.firmaDigital,
      hash: factura.hash,
    });

    console.log('✅ Factura enviada a Hacienda:', factura.numeroFactura);
    return respuesta.data;
  } catch (error) {
    console.error('❌ Error al enviar a Hacienda:', error);
    throw error;
  }
};
