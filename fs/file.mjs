"user strict";

import { mkdir } from "node:fs/promises";
import { createWriteFile } from "./writeFile.mjs";

async function createMkdirs() {
  try {
    const documents = await mkdir("documents");
    const directory = await mkdir("documents/directory");
    const file = await mkdir("documents/directory/file");
    c
  } catch (err) {
    return err;
  }
}

export async function initApp(putName) {
  const mkdir = await createMkdirs();
  const write = await createWriteFile(putName);
}

//hacer otra funcion donde espere los datos
