import { join} from "path";

export function adressFile() { 
  const address = join('directory','file');  //solo acepta un nombre a la carpeta
  return address;
}

export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
