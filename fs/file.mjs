import { mkdir } from "node:fs/promises";
import { address } from "../imports/imports.mjs"

try {
  const file = mkdir(address);
  console.log(`carpeta creada:${file}`);

} catch (err) {
  console.error("tenemos un error al crear la carpeta");
}
