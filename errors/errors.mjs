export function errorInFile(err) {
  if (err.code === "EEXIST") {
  } else if (err.code === "ENOENT") {
    console.error("direccion no validad en:", err.path);
  } else {
    console.error(err);
  }
}

export function errorInWrite(err) {
  if (err.code === "EEXIST") {
    console.error("este archivo ya esta creado con este nombre", err.path);
  } else if (err.code === "ENOENT") {
    console.error("direccion no validad en:", err.path);
  } else {
    console.error(err);
  }
}


//usar una sola funcion para toda la aplicacion