"use strict";

import { dirname, isAbsolute, basename, format, normalize, parse } from "path";
import { adressFile } from "./address.mjs";

const adress = adressFile();

function valueAdress(address) {
  const dirName = address;

  if (isAbsolute(dirName) === true) return  "direccion no valida";
  else return "direcion esta correcta";
}

console.log(valueAdress(adress));

//crear una arreglo que guarde datos viejos
//comparar datos viejo con nuevos

// const fortt = format({ //crear una direcion es casi igual que join
//   root:"/",
//   name:adress,
//   dir:"directory"

// });

//const dirName = dirname(adress); // nos devuelve un parte de la direccion
//const isabsolute = isAbsolute(dirName); // valida la direcction que estamos pasando
