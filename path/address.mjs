import { join } from "path";

export function adressFile() {
  const address = join("/files","file");
  return address;
}

export function adressArchive() {
  const address = join("file", "hola-mundo.txt");
  return address;
}
