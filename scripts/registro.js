var registros = [
    { usuario: "david",
      con: "123.43" },
    { usuario: "Diana",
      con: "1234567" }];


function agregarRegistro(){
    let user = document.findElementById("in_usuario").value;
    let password = document.findElementById("in_contrasena").value;
    let newUser = {usuario: user,con: password};
    console.log("test")
    registros.push(newUser);
    if(validar_nombreUsuario(user) && validar_contrasena(password)){
       
    }
}
function filtrarPorContrasena(datos, filtro){
    return datos.filter(function(credential){
        return credential.con.length <= filtro 
    })
}
function validar_nombreUsuario(string) {
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    return string ? string.length > 3 && string.length <= 9? expresion.test(string):false:false;
    //console.log("Validacion nombre: ",result);
    //return result;
}
function validar_contrasena(string) {
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    return string.length >= 6 ? expresion.test(string) : false
    //console.log("validacion contraseña: ", result)
}

console.log(registros);

/*
console.log("Atributos 1 objeto 1: ", registros[0].user)

let results = filtrarPorContrasena(registros,4)
console.log("Resultado 1: ", results)
let results2 = filtrarPorContrasena(registros,6)
console.log("Resultado 2: ", results2)*/
module.exports.agregarRegistro();