function OcultarContenedor(){
    var Encabezado = document.getElementById("Contenedor");
    var buttonWrapper = document.getElementById('buttonWrapper');
    Encabezado.style.display = "none";
    buttonWrapper.classList.remove('moved-down');
}
function MostrarContenedor(){
    var Encabezado = document.getElementById("Contenedor");
    var buttonWrapper = document.getElementById('buttonWrapper');
    Encabezado.style.display = "block";
    buttonWrapper.classList.add('moved-down');
}