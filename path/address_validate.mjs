"use strict";

import { dirname, isAbsolute, basename, format, normalize, parse } from "path";
import { adressFile } from "./address.mjs";

const adress = adressFile();
const parses = parse(adress);


// const fortt = format({ //crear una direcion es casi igual que join
//   root:"/",
//   name:adress,
//   dir:"directory"

// });

//const dirName = dirname(adress); // nos devuelve un parte de la direccion
//const isabsolute = isAbsolute(dirName); // valida la direcction que estamos pasando


