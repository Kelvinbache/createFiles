import { createFiles, deleteWrite, travelTheWrite } from "./imports/imports.mjs";
import { configDotenv } from "dotenv";

// para poner un nombre a un archivo nuevo --> N=nombre node app.mjs
// para ver los arcivos creados --> TW=see node app.mjs
// para borrar un archivo --> DT=nombre del archivo node app.mjs

const putName = process.env.NAME;
const seeWrite = process.env.TW;
const deleteWrites = process.env.DT;

if (putName === undefined) {
  console.log('......')
} else {
  createFiles(putName); //creadora de carpeta
}

if (seeWrite === "see") {
  travelTheWrite();
}

if(deleteWrites === " "){
  console.error('...........')
} else {
  deleteWrite(deleteWrites)
}


//hacer una condicion para cada comando
//Volver a escribir los archivos que queremos ignorar con gitIgnore