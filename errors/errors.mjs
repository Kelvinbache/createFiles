export function errors(err) {
  if (err.code === "ENOENT") {
    console.error(`las direccion no existe ${err.path}`);
  } else if (err.code === "EEXIST") {
    console.error(`este archivo ya existe ${err.path}`);
  } else {
    console.error(err);
  }
}
