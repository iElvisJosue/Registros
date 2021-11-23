const BtnFiltroPorContacto = document.querySelector('.FiltroPorContacto');

////// SECCION DE BUSCAR USUARIOS   ///////
const BuscarContactoPorNombre = document.querySelector('.BuscarContacto');
const CerrarContactoPorNombre = document.querySelector('.Form-IconoCerrarBuscarContacto');

////// FUCIONES PARA MOSTRAR Y CERRAR LA BUSQUEDA POR CONTACTO  ///////
BtnFiltroPorContacto.addEventListener('click', () => {
    BuscarContactoPorNombre.classList.add('BuscarContacto-Mostrar');
})

CerrarContactoPorNombre.addEventListener('click', () => {
    BuscarContactoPorNombre.classList.remove('BuscarContacto-Mostrar');
})

function VerResultadosDeBusqueda(){
    var VerRB = document.querySelector(".Form-InputBuscarNombrePorContacto").value;
    var FormRB = document.querySelector(".Form-ResultadoDeBusquedaContacto");
    if (VerRB != ''){
        FormRB.classList.add('MostrarResultadosDeBusqueda')
    }else{
        FormRB.classList.remove('MostrarResultadosDeBusqueda')
    }
}