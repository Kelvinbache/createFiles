import { createFiles } from "./imports/imports.mjs";
import { configDotenv } from "dotenv";

// para poner un nombre a un archivo nuevo --> N=nombre node app.mjs

const putName = process.env.NAME;

if (putName === "") {
  console.error("Hay un problema al iniciar");
} else {
  createFiles(putName); //creadora de carpeta
}
