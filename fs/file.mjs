'user strict'

import { mkdir } from "node:fs/promises";

//creando las carpetas de forma asincrona

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
async function active() { // funcion activadora 
  await createAddressDocuments();
  await createAddressDirectoryFile();
  await createAddressFile();
}


active()
  .then(() => {
    console.log("las carpetas se crearon con exicto");
  })
  .catch((err) => {
    if(err.code === 'EEXIST') console.error('ya estas carpetas existen --->',err.path); //si una carpeta existe pasame el error y la direccion de la carpeta
    else console.error(err) //si hay un error creando una carpeta pasame el error por consola 
  });
