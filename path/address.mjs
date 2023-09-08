import { join } from "path";


//creando la direccion a creadora de carpetas
export function adressFile() {
  const address = join("directory", "file"); //solo acepta un nombre a la carpeta
  return address;
}

//creando la direccion a creadora de archivos
export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
