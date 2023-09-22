import { rm } from "node:fs/promises";

export async function remover(nameFile) {
  try {
    const removerFile = await rm(`documents/directory/file/${nameFile}`);
    console.log("archivo removido con exicto");
  } catch (err) {
    console.error("tenemos un problema removiendo el archivo");
  }
}

//Intentar manejar las respuestas inesperadas de las otras funciones 