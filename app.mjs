import { createFiles } from "./imports/imports.mjs";

const createFile = createFiles; //llamndo a la funcion iniciadora

createFile.then(() => {
  console.log("las carpetas se crearon con exicto");
})

.catch((err) => {
  if(err.code === 'EEXIST') console.error('ya estas carpetas existen --->',err.path); //si una carpeta existe pasame el error y la direccion de la carpeta
  else console.error(err) //si hay un error creando una carpeta pasame el error por consola 
});

