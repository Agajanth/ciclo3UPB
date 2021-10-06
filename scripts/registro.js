let registros = [{username: "David", password: "1234567"}];
      

let form = document.getElementById("btn-submit-form");
if (form){
    form.addEventListener("submit", agregarRegistro());
}

function credentials(username, password) {
    this.username = username;
    this.password = password;
}


function agregarRegistro(){
    let user = document.getElementById("in_usuario").value;
    let password = document.getElementById("in_contrasena").value;
    console.log(user);
    console.log(password);
    let credencial = new credentials(user,password);
    console.log("test")
    if(validar_nombreUsuario(user) && validar_contrasena(password)){
       registros.push(credencial); 
       console.log(registros);
    }  
   }

    function filtrarPorContrasena(datos, filtro){
        return datos.filter(function(credential){
            return credential.con.length <= filtro 
        })
    }
    function validar_nombreUsuario(string) {
        const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
        let result = string ? string.length > 3 && string.length <= 9? expresion.test(string):false:false;
        console.log("Validacion nombre: ",result);
         
        
        //return result;
    }
    function validar_contrasena(string) {
        const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
        let result= string? string.length >= 6 ? expresion.test(string) : false:false;
        console.log("validacion contraseña: ", result)
            
    }
    

    console.log(registros);
exports.modules = {registros,agregarRegistro,filtrarPorContrasena}
