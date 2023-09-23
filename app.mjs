import { createFiles, deleteWrite, travelTheWrite } from "./imports/imports.mjs";

// para poner un nombre a un archivo nuevo --> NAME=nombre node app.mjs
// para ver los arcivos creados --> TW=see node app.mjs
// para borrar un archivo --> DT=nombre del archivo node app.mjs

const putName = process.env.NAME;
const seeWrite = process.env.TW;
const deleteWrites = process.env.DT;


function init(){
  if(putName !== undefined){
       createFiles(putName);

  } else if(seeWrite === 'see'){
      travelTheWrite(seeWrite);  
 
    } else if(deleteWrites !== undefined){
       deleteWrite(deleteWrites);

  } else {
    console.log('para iniciar el programa debe escribir algo')
  }
}

init();

//Volver a escribir los archivos que queremos ignorar con gitIgnore