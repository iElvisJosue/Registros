////// OBTENER BOTONES DEL HTML  ///////
BtnNuevaCita = document.querySelector('.NuevaCita');
BtnNuevoContacto = document.querySelector('.NuevoContacto');
const BtnNuevoRC = document.querySelector('.NuevoRC');

////// FUCION PARA MOSTRAR LOS BOTONES DE AGREGAR CONTACTO O USUARIO ///////
BtnNuevoRC.addEventListener('click', () => {
    BtnNuevoContacto.classList.toggle('MostrarNuevoContacto');
    BtnNuevaCita.classList.toggle('MostrarNuevaCita');
})

