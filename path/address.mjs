"use strict";
import { join, normalize} from "path";



export function adressFile() {
  const createAddress = join("documents","directoryFile","file");
  return createAddress;
}

export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
