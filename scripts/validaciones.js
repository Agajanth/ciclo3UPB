function validar_nombreUsuario() {
    string = document.getElementById('in_usuario').value
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    return string ? string.length > 3 && string.length <= 9? expresion.test(string):false:false;
    //console.log("Validacion nombre: ",result);
    //return result;
}
function validar_contrasena() {
    string = document.getElementById('in_contrasena').value;
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    return string.length >= 6 ? expresion.test(string) : false
    //console.log("validacion contraseña: ", result)
}

module.exports.validar_nombreUsuario=validar_nombreUsuario;
module.exports.validar_contrasena=validar_contrasena;
