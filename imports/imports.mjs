import { initApp } from "../fs/file.mjs";
import { travelWrite } from "../travelWrite/travelWrite.mjs";
import { remover } from "../delete/delete.mjs";

//comienza la aplicacions
export const createFiles = initApp;

//mostrar los archivos creados
export const travelTheWrite = travelWrite;

//remover archivo
export const deleteWrite = remover;
