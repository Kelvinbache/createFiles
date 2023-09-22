export function errors(err) {
  if (err.syscall === "mkdir") {
  
  } else if (err.syscall === "writeFile" && err.code !== "EEXIST") {
    console.error("tenemos un problema creando los archivos", err.path);
  
  } else if (err.syscall === "lstat" && err.code !== "ENOENT") {
    console.error("tenemos un problema eliminando el archivo:", err.path);

  } else if (err.syscall === "scandir" && err.code !== "ENOENT") {
    console.error("tenemos un problema para recorrer los archivos", err.path);
  }
}
