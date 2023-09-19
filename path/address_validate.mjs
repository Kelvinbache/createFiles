"use strict";

import { stat } from "fs/promises";
import { opendir } from "fs/promises";

const address = "/documents/directory/file";

async function addressValidate() {
  try {
    const openAddress = await stat(address);
    return openAddress;
  } catch (err) {
    return err;
  }
}

addressValidate().then(data =>{
  console.log(data);

}).catch(err =>{
  if(err.code === "ENOENT") console.log('direccion no encontrada')
   console.error("tenemos un error",err)
})

//validar la ruta
// ver si el archivo esta creado
// controlar los errores de crearcion
