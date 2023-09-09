//importando en un archivo que se encarga de ejecutar las funciones entre archivos

import {adressFile,adressDocuments,adressDirectoryFile,} from "../path/address.mjs";
import { active } from "../fs/file.mjs";


////direciones separadas y inicilizadas
export const addressDocumentss = adressDocuments();
export const adressDirectoryFille = adressDirectoryFile();
export const adressFille = adressFile();



//comienza la aplicacions
export const createFiles = active();
