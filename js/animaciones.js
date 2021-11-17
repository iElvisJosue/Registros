////// OBTENER BOTONES DEL HTML  ///////
const BtnNuevoRC = document.querySelector('.NuevoRC');
const BtnNuevoContaco = document.querySelector('.NuevoContacto');
const BtnNuevaCita = document.querySelector('.NuevaCita');

////// SECCION DE MOSTRAR LA INFORMACION DEL CONTACTO  ///////
const MostrarInformacion = document.getElementsByClassName('MostrarInformacion');
const VerInformacion = document.querySelector('.VerInformacion');
const InformacionCerrar = document.querySelector('.Informacion-Cerrar');

////// SECCION DE REGISTRAR COACTO   ///////
const RegistrarContacto = document.querySelector('.RegistrarContacto');
const RegistrarCerrar = document.querySelector('.Form-IconoCerrar');


////// SECCION DE REGISTRAR COACTO   ///////
const RegistrarCita = document.querySelector('.RegistrarCita');
const CitaCerrar = document.querySelector('.Form-IconoCitaCerrar');


////// FUCION PARA MOSTRAR LOS BOTONES DE AGREGAR CONTACTO O USUARIO ///////
BtnNuevoRC.addEventListener('click', () => {
    BtnNuevoContaco.classList.toggle('MostrarNuevoContacto');
    BtnNuevaCita.classList.toggle('MostrarNuevaCita');
})

////// FUCION PARA MOSTRAR LA SECCION DE MOSTRAR LA INFORMACION DEL CONTACTO  ///////
for (i = 0; i < MostrarInformacion.length; i++){
    MostrarInformacion[i].addEventListener('click', () => {
        VerInformacion.classList.add('Informacion-Mostrar');
    })
}
InformacionCerrar.addEventListener('click', () => {
    VerInformacion.classList.remove('Informacion-Mostrar');
})

////// FUCION PARA MOSTRAR LA SECCION DE REGISTRAR CONTACTO  ///////
BtnNuevoContaco.addEventListener('click', () => {
    RegistrarContacto.classList.add('RegistrarContacto-Mostrar');
})
RegistrarCerrar.addEventListener('click', () => {
    RegistrarContacto.classList.remove('RegistrarContacto-Mostrar');
})


////// FUCION PARA MOSTRAR LA SECCION DE REGISTRAR CONTACTO  ///////
BtnNuevaCita.addEventListener('click', () => {
    RegistrarCita.classList.add('RegistrarCita-Mostrar');
})
CitaCerrar.addEventListener('click', () => {
    RegistrarCita.classList.remove('RegistrarCita-Mostrar');
})