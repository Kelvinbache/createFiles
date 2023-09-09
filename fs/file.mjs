"user strict";

import { mkdir } from "node:fs/promises";
import {addressDocumentss,adressDirectoryFille,adressFille,} from "../imports/imports.mjs"; //importando mas de una direccion

// //creando las carpetas de forma asincrona
function createAddressDocuments() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir(addressDocumentss);
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta general", err);
    }
  });
}

function createAddressDirectoryFile() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir(adressDirectoryFille);
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta de Directorio", err);
    }
  });
}

function createAddressFile() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir(adressFille);
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta de file", err);
    }
  });
}

//Haciendo asincronismo para esperar las carpetas
export async function active() {

  // funcion activadora
  await createAddressDocuments();
  await createAddressDirectoryFile();
  await createAddressFile();
}
