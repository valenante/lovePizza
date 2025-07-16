// utils/firmarFacturaMock.js
export async function firmarFacturaMock(xml) {
  // Agrega la firma simulada dentro del XML como comentario o etiqueta
  const firma = 'SIMULADA-7X3BwjQL9Qb74f4Md5EB7Lfhsn7kJ38/alyPfEuf4TI=';
  const firmado = xml.replace('</Factura>', `<Firma>${firma}</Firma></Factura>`);
  return firmado;
}
