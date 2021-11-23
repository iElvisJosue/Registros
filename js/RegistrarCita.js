const RegistrarCita = document.querySelector('.RegistrarCita');
const CerrarRegistrarCita = document.querySelector('.Form-IconoCitaCerrar');

const FormBotonAbrirContacto = document.querySelector('.Form-BotonAbrirContacto');

BtnNuevaCita.addEventListener('click', () => {
    RegistrarCita.classList.add('RegistrarCita-Mostrar');
})
CerrarRegistrarCita.addEventListener('click', () => {
    RegistrarCita.classList.remove('RegistrarCita-Mostrar');
})


// FUNCION PARA EL BOTON DE AGREGAR CONTACTO NUEVO EN CITA
FormBotonAbrirContacto.addEventListener('click', () => {
    RegistrarCita.classList.remove('RegistrarCita-Mostrar');
    RegistrarContacto.classList.add('RegistrarContacto-Mostrar');
})