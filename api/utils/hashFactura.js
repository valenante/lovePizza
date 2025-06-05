/*
import crypto from 'crypto';

export function generarHashFactura(factura, hashAnterior) {
  const datos = [
    factura.numeroFactura,
    factura.fechaExpedicion,
    factura.cliente?.nombre || '',
    factura.cliente?.nif || '',
    factura.importeTotal.toFixed(2),
    hashAnterior,
  ].join('|');

  const hash = crypto.createHash('sha256').update(datos).digest('base64');
  return hash;
}
*/