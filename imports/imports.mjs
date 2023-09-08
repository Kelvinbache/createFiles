//importando en un archivo que se encarga de ejecutar las funciones entre archivos
import { adressFile } from "../path/address.mjs"; 
import { createFile } from "../fs/file.mjs";

export const address = adressFile();
export const createFiles = createFile();