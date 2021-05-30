function verificarSiEsVacio(elemento){
    console.log(elemento)
    if(elemento=="" ){
        return true
    }
    return false
}
function verificarUsuario(usuario){
    for(var i=0;i<usuario.length;i++){
        if(usuario[i]=="@"){
            return false
        }
    }
    return true
}

function ingresar(){
    var usuario=document.getElementById("usuario").value;
    var password=document.getElementById("password").value; 
    
    console.log(password)
    console.log(usuario)
    if(verificarSiEsVacio(usuario)){
        alert("Ingrese el usuario")
        return
    }
    if(verificarUsuario(usuario)){
        alert("El usuario debe contener @")
        return
    }   
    if(verificarSiEsVacio(password)){
        alert("Ingrese el password")
        return
    }
}