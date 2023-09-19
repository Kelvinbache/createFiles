"user strict";

import { mkdir } from "node:fs/promises";
import { createWeite } from "../imports/imports.mjs";

function createAddressDocuments() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir("documents");
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta general",err);
    }
  });
}

function createAddressDirectoryFile() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir("documents/directory");
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta de Directorio",err);
    }
  });
}

function createAddressFile() {
  return new Promise((resolve, rejecta) => {
    try {
      const createMkdir = mkdir('documents/directory/file');
      resolve(createMkdir);
    } catch (err) {
      rejecta("tenemos un error al crear la carpeta de file",err);
    }
  });
}

//Haciendo asincronismo para esperar las carpetas
export async function active() {
   await createAddressDocuments();
   await createAddressDirectoryFile();
   await createAddressFile();
}

