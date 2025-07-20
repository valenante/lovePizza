// utils/firmarFactura.js
import fs from 'fs';
import forge from 'node-forge';

export const firmarHashFactura = (hash, rutaCertP12, password) => {
  const p12Der = fs.readFileSync(rutaCertP12, 'binary');
  const p12Asn1 = forge.asn1.fromDer(p12Der);
  const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, password);

  const keyObj = p12.getBags({ bagType: forge.pki.oids.keyBag })[forge.pki.oids.keyBag][0];
  const privateKey = keyObj.key;

  const md = forge.md.sha256.create();
  md.update(hash, 'utf8');

  const signature = privateKey.sign(md);
  const firmaBase64 = forge.util.encode64(signature);

  return firmaBase64;
};
