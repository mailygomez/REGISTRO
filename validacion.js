function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let nombre=document.getElementById("nombre").value;
let apellido=document.getElementById("apellido").value;
let correo=document.getElementById("email").value;
let cont1=document.getElementById("password1").value;
let cont2=document.getElementById("password2").value;
let terminos=document.getElementById("terminos");
let bottonderegistro=document.getElementById("regBtn");




bottonderegistro.addEventListener("click", function(e){

    if ((nombre.length!=0)&&(apellido.length!=0)&&(correo.length!=0)
    &&(terminos.checked==true)&&(cont1.length>=6)&&(cont1===cont2))
       { showAlertSuccess();
       } else { 
        showAlertError();
       }
})