"use strict";

import { join } from "path";

export function adressDocuments() {
  const createDocumemt = join("documents");
  return createDocumemt;
}

export function adressDirectoryFile() {
  const createDirectoryFile = join("documents/directoryFile");
  return createDirectoryFile;
}

//creando la direccion a creadora de carpetas
export function adressFile() {
  const createAddress = join("documents", "directoryFile", "file");
  return createAddress;
}

//creando la direccion a creadora de archivos
export function adressArchive() {
  const address = join("documents", "directoryFile", "file", "hola-mundo.txt");
  return address;
}
