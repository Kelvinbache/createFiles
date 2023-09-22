import { rm } from "node:fs/promises";
import { errors } from "../errors/errors.mjs";

export async function remover(nameFile) {
  try {
    const removerFile = await rm(`documents/directory/file/${nameFile}`);
    console.log("archivo removido con exicto");
  } catch (err) {
    errors(err)
  }
}




//Intentar manejar las respuestas inesperadas de las otras funciones 