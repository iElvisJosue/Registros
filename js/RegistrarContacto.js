const RegistrarContacto = document.querySelector('.RegistrarContacto');
const CerrarRegistrarContacto = document.querySelector('.Form-IconoCerrar');

BtnNuevoContacto.addEventListener('click', () => {
    RegistrarContacto.classList.add('RegistrarContacto-Mostrar');
})
CerrarRegistrarContacto.addEventListener('click', () => {
    RegistrarContacto.classList.remove('RegistrarContacto-Mostrar');
})
