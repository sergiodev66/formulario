function validar(){
    var nombre,apellidos,correo,usuario,clave,telefono,expresion;
    nombre= document.getElementById("nombre").value;
    apellidos= document.getElementById("apellidos").value;
    correo= document.getElementById("correo").value;
    usuario= document.getElementById("usuario").value;
    clave= document.getElementById("clave").value;
    telefono= document.getElementById("telefono").value;
    expresion= /\w+@\w+\.+[a-z]/;

    if(nombre==="" ||apellidos==="" ||correo==="" || usuario==="" ||clave===""||telefono===""){
        alert("todos los campos son obligatorios");
        return false;
    }
    else if( nombre.length>10){
        alert("introduzca un nombre con un maximo de 10 caracteres");
        return false;
    }
    else if( apellidos.length>20){
        alert("introduzca su apellido con un maximo de 20 caracteres");
        return false;
    }
    else if( correo.length>50){
        alert("introduzca un correo con un maximo de 50 caracteres");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("introduzca un correo valido");
        return false;
    }
    else if( usuario.length>20 || clave.length>20){
        alert("introduzca un nombre de usuario y de clave con un maximo de 20 caracteres");
        return false;
    }
    else if( telefono.length>10){
        alert("introduzca un numero de telefono con un maximo de 10 caracteres");
        return false;
    }
    else if(isNaN(telefono)){
        alert("introduzca solo numeros en el telefono");
        return false;
    }
}

