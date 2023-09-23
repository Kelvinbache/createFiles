import { readdir } from "fs/promises";
import { answerOfTravel } from "../answer/answer.mjs";

export async function travelWrite() {
  try {
    const readdirWrites = await readdir("documents/directory/file");
    for (const writes of readdirWrites) {
      answerOfTravel(writes);
    }
  } catch (err) {
    console.error(err);
  }
}



