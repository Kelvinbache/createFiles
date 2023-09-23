import { rm } from "node:fs/promises";
import { errors } from "../errors/errors.mjs";
import { answerOFDelete } from "../answer/answer.mjs";


export async function remover(nameFile) {
  try {
    const removerFile = await rm(`documents/directory/file/${nameFile}`);
    answerOFDelete(nameFile);
  } catch (err) {
    errors(err)
  }
}



