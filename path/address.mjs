"use strict";
import { join } from "path";

//creando la direccion a creadora de carpetas
export function adressFile() {
  const createAddress = join("documents", "directoryFile", "file");
  return createAddress;
}

//creando la direccion a creadora de archivos
export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
