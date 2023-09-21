import { rm } from "node:fs/promises";
import { join } from "node:path";


async function remove() {
  try {
    const rmFile = await rm("/documents/directory/file/hello.txt");
    console.log("archivo borrado con exicto", rmFile);
  } catch (err) {
    console.error(err)
  }
}

remove()