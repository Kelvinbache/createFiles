"user strict";

import { mkdir } from "node:fs/promises";

async function createMkdir() {
  try {
    const documents = await mkdir("documents");
    const directory = await mkdir("documents/directory");
    const file = await mkdir("documents/directory/file");

  } catch (err) {
    if (err.code !== "EEXIST") return (err.path);
    else return err
  }
}

createMkdir()
