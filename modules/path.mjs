import { join } from "node:path";


export function adress() {
  const routerJoin = join('archivos');
  return routerJoin;
}

export function adressFile(){
   const routerJoin = join('archivos',"hola.txt");
   return routerJoin;
}