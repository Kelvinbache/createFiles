import { readdir } from "fs/promises";

export async function travelWrite() {
  try {
    const readdirWrites = await readdir("documents/directory/file");
    for (const writes of readdirWrites) {
      console.log(writes);
    }
  } catch (err) {
    console.error(err);
  }
}



