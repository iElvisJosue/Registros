const EditarVerInformacion = document.querySelector(".VerInformacion");
const EditarCita = document.querySelector(".EditarCita");
const BtnEditarVerInformacion = document.querySelector(".Informacion-Editar");
const FormEditarCitaCerrar = document.querySelector(".Form-EditarCitaCerrar");

BtnEditarVerInformacion.addEventListener('click', () => {
    EditarVerInformacion.classList.remove('Informacion-Mostrar');
    EditarCita.classList.add('EditarCita-Mostrar');
})
FormEditarCitaCerrar.addEventListener('click', () => {
    EditarCita.classList.remove('EditarCita-Mostrar');
    EditarVerInformacion.classList.add('Informacion-Mostrar');
})

function VerResultadosDeBusquedaEditarCita(){
    var VerRBEC = document.querySelector(".Form-EditarCitaInputNombre").value;
    var FormRBEC = document.querySelector(".Form-EditarCitaResultadoDeBusqueda");
    if (VerRBEC != ''){
        FormRBEC.classList.add('MostrarResultadosDeBusquedaEditarCita')
    }else{
        FormRBEC.classList.remove('MostrarResultadosDeBusquedaEditarCita')
    }
}