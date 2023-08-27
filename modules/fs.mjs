import { mkdir, writeFile, readdir } from "node:fs/promises";

const fileCreate = await mkdir("hola mundo", { recursive: true }); // se inicia mediante promesas en este caso

async function writerCreate() {
  const content = "hola mundo";
  const writer = await writeFile("hola.txt", content);

  return writer;
}

writerCreate().catch((err) => {
  console.error(err);
});
