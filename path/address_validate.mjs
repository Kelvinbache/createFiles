"use strict";

import {} from "path";
import { readdir } from "fs";

readdir(".", (err,data) => {
  if (err) console.error("tenemos un errro");
  else {
    data.forEach(file => console.log(file)) 
  }
});

//seguir trabajando en ver las rutas 
// despues convertir eso en una direccion y despues pasar eso a creadora de archivos