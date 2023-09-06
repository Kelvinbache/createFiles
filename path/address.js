const path = require("node:path");

export function adressFile(){
    const address = path.join("files/file");
    return address;
}


export function adressArchive(){
    const address = path.join("file","hola-mundo.txt")
    return address
}
