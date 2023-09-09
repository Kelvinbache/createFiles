"use strict";
import { join } from "path";

export function adressDocuments() {
  const createDocumemt = join("documents");
  return createDocumemt;
}

export function adressDirectoryFile() {
  const createDirectoryFile = join("directoryFile");
  return createDirectoryFile;
}

export function adressFile() {
  const createAddress = join("documents", "directoryFile", "file");
  return createAddress;
}

export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
