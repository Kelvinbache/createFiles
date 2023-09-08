import { mkdir } from "node:fs/promises";
import { address } from "../imports/imports.mjs";

export function createFile() { // exportamos la funcion para usar esta funcion en otra carpeta

  return new Promise((resolve, rejects) => {
    //estamos viendo si no hay un error al crear la carpeta
    try {
      const adress = address;
      const createMkdir = mkdir(adress, { recursive: true });
      resolve(createMkdir);
   
    } catch (err) {rejects(err);} // si tenemos un error devuelve este error 
  });
}
