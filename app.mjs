import { createFiles } from "./imports/imports.mjs";
import pc from"picocolors"

const createFile = createFiles; //llamndo a la funcion iniciadora

createFile.then(() => {
  console.log(pc.green("las carpetas se crearon con exicto"));
})

.catch((err) => {
  if(err.code === 'EEXIST') console.error(pc.red('ya estas carpetas existen --->'),pc.underline(err.path)); //si una carpeta existe pasame el error y la direccion de la carpeta
  else console.error(pc.red(err)) //si hay un error creando una carpeta pasame el error por consola 
});

