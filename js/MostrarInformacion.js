const Seccion2 = document.querySelector(".Seccion-2")
const VerInformacion = document.querySelector(".VerInformacion");
const CerrarVerInformacion = document.querySelector('.Informacion-Cerrar');

////// SECCION DE MOSTRAR DATOS COMPLETOS DEL USUARIO   ///////
const IconoMostrarInformacionCompleta = document.querySelector('.Informacion-IconoMostrar');
const DatosDelContacto = document.querySelector('.Informacion-DatosDelContacto');

////// FUCION PARA MOSTRAR LA SECCION DE REGISTRAR CONTACTO  ///////
IconoMostrarInformacionCompleta.addEventListener('click', () => {
    DatosDelContacto.classList.toggle('Mostrar-Informacion-DatosDelContacto');
    IconoMostrarInformacionCompleta.classList.toggle('RotarIcono');
})

Seccion2.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON' || e.target.tagName == 'ION-ICON'){
        VerInformacion.classList.add('Informacion-Mostrar');
    }
})

CerrarVerInformacion.addEventListener('click', () => {
    VerInformacion.classList.remove('Informacion-Mostrar');
 })