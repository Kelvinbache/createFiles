import { mkdir, writeFile, rm } from "node:fs/promises";
import { adress, adressFile } from "./path.mjs";

//direcciones donde estamos guardando los archivos
const routes = adress();
const routesFiles = adressFile();

// creando la carpeta
const fileCreate = await mkdir(routes, { recursive: true }); // se inicia mediante promesas en este caso

//Creando el documento
async function writerCreate() {
  const content = "hola mundo";
  const writer = await writeFile(routesFiles, content);

  return writer;
}

writerCreate().catch((err) => {
  console.error(err);
});

//borrando el archivo
setTimeout(() => {
  const remove = rm(routesFiles,{recursive:true});
  console.log("archivo borrado");
}, 10000);
