import { mkdir } from "node:fs/promises";
import { adressFile} from "./path/address.js";

try {
  const file = mkdir(adressFile);
  console.log(`carpeta creada:${file}`);

} catch (err) {
  console.error("tenemos un error al crear la carpeta");
}
