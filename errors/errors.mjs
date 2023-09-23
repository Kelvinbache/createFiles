export function errors(err) {
  switch (err.syscall) {
    case "mkdir":
      console.error(".............................................."); //solucionar el problema de mostrar estos caracteres
      break;
    case "lstat":
      console.error(
        `tenemos un error borrando, el tipo de error es:${err.code} y la direccion es:${err.path}`);
      break;
     case "scandir":
      console.error(
        `tenemos un error recorriendo los archivos, el tipo de error es:${err.code} y la direccion es:${err.path}`
      );
      break;
    default:
  }
}

//usar una sola funcion para toda la aplicacion
