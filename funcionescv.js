
document.getElementById('boton_mostrar1').addEventListener('click', function(){
    document.getElementById("email").style.display= 'block';
    console.log("Se muestra email")
    document.getElementById("boton_mostrar1").style.display= 'none';
    console.log("se oculta boton mostrar email")
});
document.getElementById('boton_mostrar2').addEventListener('click', function(){
    document.getElementById("telefono").style.display= 'block';
    console.log("Se muestra numero telefonico")
    document.getElementById("boton_mostrar2").style.display= 'none';
    console.log("se oculta boton mostrar numero")
});

document.getElementById('boton_mostrar3').addEventListener('click', function(){
    document.getElementById("contactar").style.display= 'block';
    console.log("Aparece formulario para contacto")
    document.getElementById("boton_mostrar3").style.display= 'none';
    console.log("desaparece boton para contactar ")
});