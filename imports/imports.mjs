//importando en un archivo que se encarga de ejecutar las funciones entre archivos

import {adressFile,adressDocuments,adressDirectoryFile,adressArchive} from "../path/address.mjs";
import { active } from "../fs/file.mjs";
import { createWriteFile } from "../fs/writeFile.mjs";


////direciones separadas y inicilizadas
export const addressDocumentss = adressDocuments();
export const adressDirectoryFille = adressDirectoryFile();
export const adressFille = adressFile();
export const addressArchive = adressArchive();



//comienza la aplicacions
export const createFiles = active();
export const createWrirteFile = createWriteFile();
