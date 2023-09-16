"user strict";

import { mkdir } from "node:fs/promises";
import {
  addressDocumentss,
  adressDirectoryFille,
  adressFille,
} from "../imports/imports.mjs"; //importando mas de una direccion

async function createMkdirs() {
  try {
    const createAddressDocuments = await mkdir(addressDocumentss);
  } catch (err) {
    return err;
  }

  try {
    const createAddressDirectoryFile = await mkdir(adressDirectoryFille);
  } catch (err) {
    return err;
  }

  try {
    const createAddressFile = await mkdir(adressFille);
  } catch (err) {
    return err;
  }
}

//Haciendo asincronismo para esperar las carpetas
export function active() {
  createMkdirs()
    .then((data) => {
      console.log("archivo creado con exicto");
    })
    .catch((err) => {
      if (err !== "EEXIST") console.error(`esta direccion existe: ${err.path}`);
        console.error("tenemos un problema creando las carpetas");
    });
}


//quitar los try y casth, cambiar las condiones puestas  