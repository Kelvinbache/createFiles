"use strict";

import { parse } from "path";
import { readdir, stat } from "node:fs/promises";

async function ls(diretions) {
  let addressOfTerminal;

  try {
    addressOfTerminal = await readdir(diretions);
  } catch (err) {
    console.error("tenemos un error al mostrar los archivos");
  }
  for (const file of addressOfTerminal) {
    if (file === "documents") {
      console.log(parse(file));
    }
  }
}

ls(".");

//seguir trabajando en ver las rutas
// despues convertir eso en una direccion y despues pasar eso a creadora de archivos